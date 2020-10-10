import React, { useRef } from 'react';
import produce from 'immer';
import { Dimensions, PanResponder, View, StyleSheet, Alert } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';
import ButtonComponent from './Button';

export interface GesturePathProps {
    shapeList: any[]
    color: string
}
const GesturePath = (props: GesturePathProps) => {
    const { width, height } = Dimensions.get('window');
    const polyline = props.shapeList.map((points, index) => {
        return (
            <Polyline
                key={index}
                points={points}
                fill="none"
                stroke={props.color}
                strokeWidth="10"
                strokeLinecap="round"
            />
        );
    });

    return (
        <Svg height="100%" width="100%" viewBox={`0 0 ${width} ${height}`}>
            {polyline}
        </Svg>
    );
};

export interface GestureRecorderProps {
    onPathChanged: Function
}

const GestureRecorder = (props: GestureRecorderProps) => {
    const pathRef = useRef([]);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => { pathRef.current = [] },
            onPanResponderMove: (event) => {
                const point: string = `${event.nativeEvent.locationX} ${event.nativeEvent.locationY}`;
                pathRef.current.push(point);
                props.onPathChanged([...pathRef.current]);
            },
            onPanResponderRelease: () => {
                props.onPathChanged([...pathRef.current])
            },
        })
    ).current;

    return (
        <View
            style={StyleSheet.absoluteFill}
            {...panResponder.panHandlers}
        />
    );
}

export interface SketchViewComponentProps {
    onSave: Function
    points: Array<String>
}
  
class SketchViewComponent extends React.Component<SketchViewComponentProps> {
    state = {
        shapeList: [...this.props.points]
    }

    onPathChanged = (path: Array<String> = []) => {
        this.setState(
            produce(this.state, draft => {
                draft.shapeList.push(path);
            })
        )
    };

    onClean = () => {
        this.setState(
            produce(this.state, draft => {
                draft.shapeList = [];
            })
        )
    };

    onSave = () => {
        if(this.state.shapeList.length == 0) {
            Alert.alert('Empty Sketch', 'Draw your aweasome sketch');
            return;
        }
        this.props.onSave(this.state.shapeList)
    }

    render() {
        return (
            <View>
                <View style={styles.box}>
                    <ButtonComponent title="Clean" onPress={this.onClean} />
                    <ButtonComponent title="Save" onPress={this.onSave} />
                </View>
                <View>
                    <GesturePath shapeList={this.state.shapeList} color="green" />
                    <GestureRecorder onPathChanged={this.onPathChanged} />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    box: { 
        padding: 10,
        flexDirection: "row", 
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: '#C3C3C3',
        backgroundColor: '#c5c5c5'
    }
});

export default SketchViewComponent;
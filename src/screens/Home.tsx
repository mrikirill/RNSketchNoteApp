import React from 'react';
import { observer, inject } from 'mobx-react';
import { View, Alert } from 'react-native';
import SketchListComponent from '../components/SketchList';
import SketchStore from '../stores/SketchStore';
import ButtonComponent from '../components/Button';



export interface Props {
  sketchStore: SketchStore;
  navigation: any;
}

@inject('sketchStore')
@observer
class HomeScreen extends React.Component<Props> {
  onSketchPress = (index: number) => {
    this.props.sketchStore.selectSketchItem(index);
    this.props.navigation.navigate('MyAwesomeSketch');
  };

  onCreateNew = () => {
    this.props.navigation.navigate('NewSketch');
  }

  onDeleteAll = () => {
    Alert.alert(
      "Delete all sketches ?",
      "Would you like to delete all sketches ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.sketchStore.deleteAllSketches()}
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
    <>
      <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-around'}}>
        <ButtonComponent title="Create new +" onPress={this.onCreateNew} />
        <ButtonComponent title="Delete all" onPress={this.onDeleteAll} />
      </View>
      <View style={{flex: 1}}>
        <SketchListComponent 
          items={this.props.sketchStore.sketchItems}
          onItemPress={this.onSketchPress}
        />
      </View>
    </>
    )
  }
}
export default HomeScreen;

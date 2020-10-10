import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SketchItem from '../models/SketchItem';


export interface Props {
  item: SketchItem;
  index: number;
  onPress: Function;
}

class SketchItemComponent extends React.Component<Props> {
  handlePress = () => {
    this.props.onPress(this.props.index);
  };

  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        style={styles.block}
        onPress={() => this.handlePress()}>
        <View>
          <Text>Sketch Name: <Text style={styles.value}>{item.name}</Text></Text>
          <Text>Date: <Text style={styles.value}>{item.date?.toDateString()}</Text></Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderRadius: 10,
    borderWidth: 1,
    borderTopWidth: 0,
  },

  value: {
    fontWeight: "bold"
  }
});

export default SketchItemComponent;

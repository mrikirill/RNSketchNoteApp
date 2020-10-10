import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SketchItem from '../models/SketchItem';
import SketchItemComponent from './SketchItem';

export interface Props {
  items: SketchItem[];
  onItemPress: Function;
}

class SketchListComponent extends React.Component<Props> {
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SketchItemComponent 
              item={item} 
              index={index} 
              onPress={this.props.onItemPress} 
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#EEEEEE',
  },
});

export default SketchListComponent;

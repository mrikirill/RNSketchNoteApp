import React from 'react';
import { observer, inject } from 'mobx-react';
import SketchStore from '../stores/SketchStore';
import SketchViewComponent from '../components/SketchView';

export interface Props {
  sketchStore: SketchStore;
  navigation: any;
}

@inject('sketchStore')
@observer
class DetailSketchScreen extends React.Component<Props> {
  onSave = (points: Array<String> = []) => {
    this.props.sketchStore.editSketch(points);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SketchViewComponent
        onSave={this.onSave}
        points={this.props.sketchStore.sketchItems[this.props.sketchStore.selectedSketchIndex].points}
      />
    );
  }
}

export default DetailSketchScreen;

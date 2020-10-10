import {observable, runInAction, action} from 'mobx';
import LocalSketchService from '../services/LocalSketch';
import SketchList from '../models/SketchList';
import SketchItem from '../models/SketchItem';

export default class SketchStore {
  @observable selectedSketchIndex: number = 0;
  @observable sketchItems: SketchItem[] = [];

  constructor() {
    this.getSavedSketches();
  }

  @action selectSketchItem(index = 0) {
    this.selectedSketchIndex = index;
  }

  @action async deleteAllSketches() {
    this.selectedSketchIndex = 0;
    await LocalSketchService.deleteAll();
    this.getSavedSketches();
  }

  @action async createSketch(points: Array<String> = []) {
    const sketch = {
      name: `My_Sketch_${Math.random()}`,
      points
    };

    await LocalSketchService.add(sketch);
    this.getSavedSketches();
  }

  @action async editSketch(points: Array<String> = []) {
    const selectedSketch = this.sketchItems[this.selectedSketchIndex];
    selectedSketch.name =`My_Sketch_${Math.random()}`;
    selectedSketch.date = new Date();
    selectedSketch.points = points;
    await LocalSketchService.edit(this.selectedSketchIndex, selectedSketch);
    this.getSavedSketches();
  }

  async getSavedSketches() {
    LocalSketchService.get().then((data: SketchList) => {
      runInAction(() => {
        this.sketchItems = data.items;
      });
    });
  }
}

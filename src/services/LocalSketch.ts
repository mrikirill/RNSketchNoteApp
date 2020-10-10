import AsyncStorage from '@react-native-community/async-storage';
import Config from '../utils/config';
import SketchList from '../models/SketchList';
import SketchItem from '../models/SketchItem';

export default class LocalSketchService {
  static async deleteAll() {
    try {    
      const sketchList = new SketchList();
      await AsyncStorage.setItem(Config.SKETCH_KEY, JSON.stringify(sketchList.toJSON()));
    } catch (error) {
      throw error;
    }
  }

  static async add(sketch: object) {
    try {    
      const sketchItem = SketchItem.fromJSON(sketch);
      const sketchList = await LocalSketchService.get();
      sketchList.items.push(sketchItem);
      await AsyncStorage.setItem(Config.SKETCH_KEY, JSON.stringify(sketchList.toJSON()));
    } catch (error) {
      throw error;
    }
  }

  static async edit(index: number, sketchItem: SketchItem) {
    try {    
      const sketchList = await LocalSketchService.get();
      sketchList.items[index] = sketchItem;
      await AsyncStorage.setItem(Config.SKETCH_KEY, JSON.stringify(sketchList.toJSON()));
    } catch (error) {
      throw error;
    }
  }

  static async get():Promise<SketchList> {
    try {
      let value: any = await AsyncStorage.getItem(Config.SKETCH_KEY);
      const json = JSON.parse(value);
      return new SketchList().fromJSON(json);
    } catch (error) {
      throw error;
    }
  }
}

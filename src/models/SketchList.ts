import {jsonName, jsonProperty, Serializable} from 'ts-serializable';
import SketchItem from './SketchItem';

export default class SketchList extends Serializable {
  @jsonName('items')
  @jsonProperty([SketchItem])
  public items: SketchItem[] = [];
}

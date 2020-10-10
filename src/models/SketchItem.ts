import {jsonName, jsonProperty, Serializable} from 'ts-serializable';

export default class SketchItem extends Serializable {
  @jsonName('name')
  @jsonProperty(String)
  public name: string = '';

  @jsonName('date')
  @jsonProperty(Date)
  public date: Date = new Date();

  @jsonName('points')
  @jsonProperty(Array)
  public points: Array<String> = []
}

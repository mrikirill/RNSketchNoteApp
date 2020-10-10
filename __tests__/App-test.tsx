import React from 'react';
import 'react-native';
import 'reflect-metadata';
import stores from '../src/stores';

// Screens
import HomeScreen from '../src/screens/Home';
import DetailSketchScreen from '../src/screens/DetailSketch';
import NewSketchScreen from '../src/screens/NewSketch';

// Models
import SketchItem from '../src/models/SketchItem';
import SketchList from '../src/models/SketchList';

// Components
import SketchListComponent from '../src/components/SketchList';
import SketchItemComponent from '../src/components/SketchItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('create models SketchList and SketchItem from object', async () => {
  const sketchItems = {
    items: [
      {
        name: 'My_Sketch1',
        date: new Date(),
        points: ['1 1', '2 2', '3 3']
      },
      {
        name: 'My_Sketch2',
        date: new Date(),
        points: ['1 1', '2 2', '3 3']
      }
    ]
  };
  const sketchList = new SketchList().fromJSON(sketchItems);

  expect(sketchList.items.length).toEqual(2);
  expect(sketchList.items[0].name).toEqual('My_Sketch1');
  expect(sketchList.items[1].name).toEqual('My_Sketch2');
  expect(sketchList.items[0]).toBeInstanceOf(SketchItem);
});


test('test SketchListComponent component', async () => {
  const sketchItems = {
    items: [
      {
        name: 'My_Sketch1',
        date: new Date(),
        points: ['1 1', '2 2', '3 3']
      },
    ]
  };
  const sketchList = new SketchList().fromJSON(sketchItems);
  renderer.create(
    <SketchListComponent items={sketchList.items} onItemPress={() => {}} />,
  );
});

test('test SketchItemComponent component', async () => {
  const sketchItems = {
    items: [
      {
        name: 'My_Sketch1',
        date: new Date(),
        points: ['1 1', '2 2', '3 3']
      },
    ]
  };
  const sketchList = new SketchList().fromJSON(sketchItems);
  renderer.create(
    <SketchItemComponent item={sketchList.items[0]} index={0} onPress={() => {}} />,
  );
});

test('test HomeScreen', () => {
  renderer.create(<HomeScreen {...stores} navigation={{}} />);
});

test('test DetailSketchScreen', async () => {
  await stores.sketchStore.createSketch(['1 1', '2 2', '3 3']);
  renderer.create(<DetailSketchScreen {...stores} navigation={{}} />);
});

test('test NewSketchScreen Screen', () => {
  renderer.create(<NewSketchScreen {...stores} navigation={{}} />);
});

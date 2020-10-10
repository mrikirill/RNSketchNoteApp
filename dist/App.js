"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("reflect-metadata");
const mobx_react_1 = require("mobx-react");
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const stores_1 = __importDefault(require("./src/stores"));
//Screens
const Home_1 = __importDefault(require("./src/screens/Home"));
const DetailSketch_1 = __importDefault(require("./src/screens/DetailSketch"));
const NewSketch_1 = __importDefault(require("./src/screens/NewSketch"));
const Stack = stack_1.createStackNavigator();
const App = () => {
    return (<mobx_react_1.Provider {...stores_1.default}>
      <native_1.NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'My Sketches' }} component={Home_1.default}/>
          <Stack.Screen name="MyAwesomeSketch" options={{ title: 'My Awesome Sketch' }} component={DetailSketch_1.default}/>
          <Stack.Screen name="NewSketch" options={{ title: 'New Sketch' }} component={NewSketch_1.default}/>
        </Stack.Navigator>
      </native_1.NavigationContainer>
    </mobx_react_1.Provider>);
};
exports.default = App;
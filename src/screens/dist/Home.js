"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var react_native_1 = require("react-native");
var SketchList_1 = require("../components/SketchList");
var Button_1 = require("../components/Button");
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSketchPress = function (index) {
            _this.props.sketchStore.selectSketchItem(index);
            _this.props.navigation.navigate('MyAwesomeSketch');
        };
        _this.onCreateNew = function () {
            _this.props.navigation.navigate('NewSketch');
        };
        _this.onDeleteAll = function () {
            react_native_1.Alert.alert("Delete all sketches ?", "Would you like to delete all sketches ?", [
                {
                    text: "Cancel",
                    onPress: function () { return console.log("Cancel Pressed"); },
                    style: "cancel"
                },
                { text: "OK", onPress: function () { return _this.props.sketchStore.deleteAllSketches(); } }
            ], { cancelable: false });
        };
        return _this;
    }
    HomeScreen.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: { padding: 15, flexDirection: 'row', justifyContent: 'space-around' } },
                react_1["default"].createElement(Button_1["default"], { title: "Create new +", onPress: this.onCreateNew }),
                react_1["default"].createElement(Button_1["default"], { title: "Delete all", onPress: this.onDeleteAll })),
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
                react_1["default"].createElement(SketchList_1["default"], { items: this.props.sketchStore.sketchItems, onItemPress: this.onSketchPress }))));
    };
    HomeScreen = __decorate([
        mobx_react_1.inject('sketchStore'),
        mobx_react_1.observer
    ], HomeScreen);
    return HomeScreen;
}(react_1["default"].Component));
exports["default"] = HomeScreen;

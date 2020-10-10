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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var immer_1 = require("immer");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var Button_1 = require("./Button");
var GesturePath = function (props) {
    var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
    var polyline = props.shapeList.map(function (points, index) {
        return (react_1["default"].createElement(react_native_svg_1.Polyline, { key: index, points: points, fill: "none", stroke: props.color, strokeWidth: "10", strokeLinecap: "round" }));
    });
    return (react_1["default"].createElement(react_native_svg_1["default"], { height: "100%", width: "100%", viewBox: "0 0 " + width + " " + height }, polyline));
};
var GestureRecorder = function (props) {
    var pathRef = react_1.useRef([]);
    var panResponder = react_1.useRef(react_native_1.PanResponder.create({
        onMoveShouldSetPanResponder: function () { return true; },
        onPanResponderGrant: function () { pathRef.current = []; },
        onPanResponderMove: function (event) {
            var point = event.nativeEvent.locationX + " " + event.nativeEvent.locationY;
            pathRef.current.push(point);
            props.onPathChanged(__spreadArrays(pathRef.current));
        },
        onPanResponderRelease: function () {
            props.onPathChanged(__spreadArrays(pathRef.current));
        }
    })).current;
    return (react_1["default"].createElement(react_native_1.View, __assign({ style: react_native_1.StyleSheet.absoluteFill }, panResponder.panHandlers)));
};
var SketchViewComponent = /** @class */ (function (_super) {
    __extends(SketchViewComponent, _super);
    function SketchViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            shapeList: __spreadArrays(_this.props.points)
        };
        _this.onPathChanged = function (path) {
            if (path === void 0) { path = []; }
            _this.setState(immer_1["default"](_this.state, function (draft) {
                draft.shapeList.push(path);
            }));
        };
        _this.onClean = function () {
            _this.setState(immer_1["default"](_this.state, function (draft) {
                draft.shapeList = [];
            }));
        };
        _this.onSave = function () {
            if (_this.state.shapeList.length == 0) {
                react_native_1.Alert.alert('Empty Sketch', 'Draw your aweasome sketch');
                return;
            }
            _this.props.onSave(_this.state.shapeList);
        };
        return _this;
    }
    SketchViewComponent.prototype.render = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: styles.box },
                react_1["default"].createElement(Button_1["default"], { title: "Clean", onPress: this.onClean }),
                react_1["default"].createElement(Button_1["default"], { title: "Save", onPress: this.onSave })),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(GesturePath, { shapeList: this.state.shapeList, color: "green" }),
                react_1["default"].createElement(GestureRecorder, { onPathChanged: this.onPathChanged }))));
    };
    ;
    return SketchViewComponent;
}(react_1["default"].Component));
var styles = react_native_1.StyleSheet.create({
    box: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: '#C3C3C3',
        backgroundColor: '#c5c5c5'
    }
});
exports["default"] = SketchViewComponent;

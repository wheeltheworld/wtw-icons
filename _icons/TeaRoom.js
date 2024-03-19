"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../components/Icon"));
var TeaRoom = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", d: "M15,11.9V10.22a8.42,8.42,0,0,1,8.42-8.43h0a8.42,8.42,0,0,1,8.42,8.43V30.43" }),
        react_1.default.createElement("rect", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", x: "26.74", y: "30.43", width: "10.11", height: "8.42" }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", points: "20 38.85 3.16 38.85 3.16 18.64 8.21 11.9 21.68 11.9 26.74 18.64 26.74 23.69" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", x1: "11.58", y1: "18.64", x2: "18.32", y2: "18.64" })))); };
exports.default = TeaRoom;
//# sourceMappingURL=TeaRoom.js.map
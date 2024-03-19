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
var EventRoom = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("rect", { x: 3, y: 1, width: 18, height: 10, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "2 23 2 21 6 21 6 23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "14 17 14 15 18 15 18 17", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "6 17 6 15 10 15 10 17", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "10 23 10 21 14 21 14 23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "18 23 18 21 22 21 22 23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" })))); };
exports.default = EventRoom;
//# sourceMappingURL=EventRoom.js.map
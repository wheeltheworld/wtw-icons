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
var Car = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 4, y1: 10, x2: 18, y2: 10, strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, points: "20.949,16 23,16 23,10 18,10 16,5 6,5 4,10 1,10 1,16 3.051,16 ", strokeLinecap: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, x1: 7.949, y1: 16, x2: 16.051, y2: 16, strokeLinecap: "round" }),
        react_1.default.createElement("circle", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 5.5, cy: 16.5, r: 2.5, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 18.5, cy: 16.5, r: 2.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 11, y1: 5, x2: 11, y2: 10, strokeLinejoin: "round" })))); };
exports.default = Car;
//# sourceMappingURL=Car.js.map
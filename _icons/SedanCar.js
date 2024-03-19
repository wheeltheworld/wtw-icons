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
var SedanCar = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, x1: 15.051, y1: 16, x2: 7.949, y2: 16 }),
        react_1.default.createElement("polyline", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, points: "3.051,16 1,16 1,10 5,5 15,5 18,10 23,10 23,16 19.949,16 " }),
        react_1.default.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 5.5, cy: 16.5, r: 2.5 }),
        react_1.default.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 17.5, cy: 16.5, r: 2.5 }),
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, x1: 18, y1: 10, x2: 1, y2: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, x1: 10, y1: 5, x2: 10, y2: 10 })))); };
exports.default = SedanCar;
//# sourceMappingURL=SedanCar.js.map
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
var Dice = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("polyline", { "data-cap": "butt", points: "2.999 6 11.999 10 20.999 6", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", x1: 11.999, y1: 10, x2: 11.999, y2: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("polygon", { points: "20.999 18 11.999 22 2.999 18 2.999 6 11.999 2 20.999 6 20.999 18", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("ellipse", { "data-color": "color-2", "data-stroke": "none", cx: 16.5, cy: 14, rx: 1, ry: 1.25, stroke: "none" }),
        react_1.default.createElement("ellipse", { "data-color": "color-2", "data-stroke": "none", cx: 6, cy: 11.5, rx: 1, ry: 1.25, stroke: "none" }),
        react_1.default.createElement("ellipse", { "data-color": "color-2", "data-stroke": "none", cx: 9, cy: 16.5, rx: 1, ry: 1.25, stroke: "none" })))); };
exports.default = Dice;
//# sourceMappingURL=Dice.js.map
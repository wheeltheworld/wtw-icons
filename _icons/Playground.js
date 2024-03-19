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
var Playground = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("polyline", { points: "9 13 13 13 20 22 23 22", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 14, y1: 20, x2: 14, y2: 22, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { cx: 5, cy: 8, r: 1, fill: "currentColor", "data-cap": "butt", "data-color": "color-2", "data-stroke": "none", strokeLinecap: "round" }),
        react_1.default.createElement("polyline", { points: "1 22 1 6 5 2 9 6 9 22", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 1, y1: 13, x2: 9, y2: 13, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 1, y1: 18, x2: 9, y2: 18, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" })))); };
exports.default = Playground;
//# sourceMappingURL=Playground.js.map
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
var ToiletPaper = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("polyline", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, points: "16,17 16,23 1,23 1,9 ", strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("path", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M5,17h14c2.2,0,4-3.6,4-8s-1.8-8-4-8 H5", strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("ellipse", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 5, cy: 9, rx: 4, ry: 8, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 5, y1: 8, x2: 5, y2: 10, strokeLinejoin: "round" })))); };
exports.default = ToiletPaper;
//# sourceMappingURL=ToiletPaper.js.map
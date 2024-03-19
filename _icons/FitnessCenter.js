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
var FitnessCenter = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { x1: 8, y1: 15, x2: 8, y2: 23, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("line", { x1: 16, y1: 15, x2: 16, y2: 23, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M19,7l-3,8H8L5,7", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { cx: 12, cy: 9.5, r: 2.5, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 1, y1: 4, x2: 23, y2: 4, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 2, y1: 1, x2: 2, y2: 7, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 22, y1: 1, x2: 22, y2: 7, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" })))); };
exports.default = FitnessCenter;
//# sourceMappingURL=FitnessCenter.js.map
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
var Bar = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M15,6c0-2.2,1.8-4,4-4 s4,1.8,4,4s-1.8,4-4,4c-1,0-1.9-0.4-2.7-1", strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, x1: 6.6, y1: 10, x2: 15.4, y2: 10, strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("polygon", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, points: "19,6 11,15 3,6 ", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 11, y1: 15, x2: 11, y2: 22, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 6, y1: 22, x2: 16, y2: 22, strokeLinejoin: "round" })))); };
exports.default = Bar;
//# sourceMappingURL=Bar.js.map
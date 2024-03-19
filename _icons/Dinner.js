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
var Dinner = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 12, y1: 1, x2: 12, y2: 4, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 7, y1: 3, x2: 7, y2: 6, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 17, y1: 3, x2: 17, y2: 6, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 1, y1: 23, x2: 22.8, y2: 23, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 12, cy: 11, r: 2, strokeLinejoin: "round" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, d: "M2,23c0-5.5,4.5-10,10-10 s10,4.5,10,10", strokeLinejoin: "round" })))); };
exports.default = Dinner;
//# sourceMappingURL=Dinner.js.map
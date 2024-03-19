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
var Terrace = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { x1: 7, y1: 15, x2: 17, y2: 15, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 12, y1: 23, x2: 12, y2: 15, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 23, y1: 13, x2: 23, y2: 23, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "23 19 17 19 17 23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 1, y1: 13, x2: 1, y2: 23, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "1 19 7 19 7 23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M22,6A12.5,12.5,0,0,0,2,6Z", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", "data-color": "color-2", strokeLinecap: "round" }),
        react_1.default.createElement("line", { x1: 12, y1: 6, x2: 12, y2: 10, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", "data-color": "color-2", strokeLinecap: "round" })))); };
exports.default = Terrace;
//# sourceMappingURL=Terrace.js.map
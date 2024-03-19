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
var Accommodation = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { x1: 1, y1: 21, x2: 1, y2: 4, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 1, y1: 18, x2: 23, y2: 18, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("polyline", { points: "1 14 23 14 23 21", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("circle", { cx: 6, cy: 9, r: 2, fill: "none", strokeMiterlimit: 10, "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M23,11H11V7H21a2,2,0,0,1,2,2Z", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" })))); };
exports.default = Accommodation;
//# sourceMappingURL=Accommodation.js.map
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
var Weather = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { "data-cap": "butt", "data-color": "color-2", fill: "none", strokeMiterlimit: 10, d: "M6.7,14.8C6.3,14,6,13,6,12 c0-3.3,2.7-6,6-6s6,2.7,6,6c0,1.4-0.5,2.7-1.3,3.7" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 1, y1: 12, x2: 2, y2: 12 }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 4.2, y1: 4.2, x2: 4.9, y2: 4.9 }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 1, x2: 12, y2: 2 }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 19.8, y1: 4.2, x2: 19.1, y2: 4.9 }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 23, y1: 12, x2: 22, y2: 12 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M5,23c-2.2,0-4-1.8-4-4 c0-2.2,1.8-4,4-4c0.5,0,1,0.1,1.5,0.3c0.9-1.9,2.8-3.3,5-3.3c2.4,0,4.5,1.6,5.2,3.7c0.7-0.5,1.4-0.7,2.3-0.7c2.2,0,4,1.8,4,4 c0,2.2-1.8,4-4,4H5z" })))); };
exports.default = Weather;
//# sourceMappingURL=Weather.js.map
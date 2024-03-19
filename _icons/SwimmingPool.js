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
var SwimmingPool = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { d: "M6,17V3A2.006,2.006,0,0,1,8,1H8", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M18,17V3a2.006,2.006,0,0,1,2-2h0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", x1: 6, y1: 13, x2: 18, y2: 13, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinecap: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", x1: 6, y1: 7, x2: 18, y2: 7, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinecap: "round" }),
        react_1.default.createElement("path", { "data-color": "color-2", d: "M1,23a6.982,6.982,0,0,0,5.5-2.679,6.985,6.985,0,0,0,11,0A6.982,6.982,0,0,0,23,23", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" })))); };
exports.default = SwimmingPool;
//# sourceMappingURL=SwimmingPool.js.map
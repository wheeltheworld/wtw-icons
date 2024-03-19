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
var Tea = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { d: "M9,7V6a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5V18", fill: "none", stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5", "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("rect", { x: "16", y: "18", width: "6", height: "5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "12 23 2 23 2 11 5 7 13 7 16 11 16 14", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: "7", y1: "11", x2: "11", y2: "11", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", strokeLinejoin: "round" })))); };
exports.default = Tea;
//# sourceMappingURL=Tea.js.map
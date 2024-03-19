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
var WashHands = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M17,16h1.838a3,3,0,0,1,2.846,2.051L22,19,10.532,22.529a4,4,0,0,1-2.965-.246L1,19V12H2c1.105,0,3.906.438,5,2h3a4,4,0,0,1,4,4H8", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M8,9C8,7.9,10,5,10,5S12,7.9,12,9A2,2,0,0,1,8,9Z", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" }),
        react_1.default.createElement("line", { x1: 19, y1: 5, x2: 19, y2: 1, fill: "none", strokeMiterlimit: 10, "data-cap": "butt", "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M10,1H23", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M15,12V7a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" })))); };
exports.default = WashHands;
//# sourceMappingURL=WashHands.js.map
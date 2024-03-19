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
var Id = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5 0.5)" },
        react_1.default.createElement("rect", { x: 0.5, y: 3, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, width: 22, height: 17 }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, x1: 14.5, y1: 10, x2: 18.5, y2: 10 }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, x1: 14.5, y1: 14, x2: 18.5, y2: 14 }),
        react_1.default.createElement("path", { fill: "currentColor", d: "M3.5,16c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3H3.5z" }),
        react_1.default.createElement("circle", { fill: "currentColor", cx: 7.5, cy: 10, r: 2 })))); };
exports.default = Id;
//# sourceMappingURL=Id.js.map
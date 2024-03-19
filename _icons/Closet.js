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
var Closet = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("rect", { x: 2, y: 1, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, width: 20, height: 22, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 12, y1: 1, x2: 12, y2: 23, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 12, y1: 15, x2: 2, y2: 15, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 6, y1: 19, x2: 8, y2: 19, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 17, y1: 5, x2: 17, y2: 8, strokeLinejoin: "round" })))); };
exports.default = Closet;
//# sourceMappingURL=Closet.js.map
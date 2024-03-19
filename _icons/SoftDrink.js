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
var SoftDrink = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { x1: 4, y1: 12, x2: 20, y2: 12, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { points: "5 12 6 23 18 23 19 12", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M5,12a7,7,0,0,1,14,0", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("polyline", { points: "12 18 11 1 7 1", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" })))); };
exports.default = SoftDrink;
//# sourceMappingURL=SoftDrink.js.map
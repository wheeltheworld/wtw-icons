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
var Traveler = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("polyline", { points: "9 13 6 22 2.01 20.67 4.01 14.67 8 16", fill: "none", strokeMiterlimit: 10, "data-cap": "butt", "data-color": "color-2" }),
        react_1.default.createElement("polyline", { points: "15.4 8.55 20 12 23 11", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, "data-cap": "butt" }),
        react_1.default.createElement("circle", { cx: 16.5, cy: 3.5, r: 2.5, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 12, y1: 23, x2: 16.011, y2: 5.952, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, "data-cap": "butt" }),
        react_1.default.createElement("polyline", { points: "12 9 10 10 9 13", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("polyline", { points: "17 15 19 17 19 22", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 })))); };
exports.default = Traveler;
//# sourceMappingURL=Traveler.js.map
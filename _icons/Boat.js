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
var Boat = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, points: "6,7 6,2 10,2 10,7 ", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, points: "4,11 4,7 16,7 18,11 ", strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, points: "4,17 2,11 22,11 19,17 ", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, d: "M1,18 c0,2.2,1.8,4,4,4c1.5,0,2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1s2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1c2.2,0,4-1.8,4-4", strokeLinejoin: "round" })))); };
exports.default = Boat;
//# sourceMappingURL=Boat.js.map
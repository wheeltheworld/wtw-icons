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
var SocialDistancing = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M4.5,6h0a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2h0A2,2,0,0,1,4.5,6Z", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M2,22V16H1V12A3,3,0,0,1,4,9H5a3,3,0,0,1,3,3", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M17.5,4h0a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2h0A2,2,0,0,1,17.5,4Z", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M16,12a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v4H22v6", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 6, y1: 19, x2: 18, y2: 19, fill: "none", strokeMiterlimit: 10, "data-cap": "butt", "data-color": "color-2" }),
        react_1.default.createElement("polyline", { points: "9 22 6 19 9 16", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" }),
        react_1.default.createElement("polyline", { points: "14.998 22 17.998 19 14.998 16", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" })))); };
exports.default = SocialDistancing;
//# sourceMappingURL=SocialDistancing.js.map
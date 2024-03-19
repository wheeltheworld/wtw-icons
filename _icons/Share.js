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
var Share = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, x1: 7.6, y1: 10.5, x2: 16.4, y2: 5.5, strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, x1: 7.6, y1: 13.5, x2: 16.4, y2: 18.5, strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 5, cy: 12, r: 3, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 19, cy: 4, r: 3, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 19, cy: 20, r: 3, strokeLinejoin: "round" })))); };
exports.default = Share;
//# sourceMappingURL=Share.js.map
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
var ShowerGrabBar = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("g", null,
            react_1.default.createElement("g", null,
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", d: "M5.3,6.1l6,0c0-1.7-1.3-3-3-3C6.7,3.1,5.3,4.4,5.3,6.1z" }),
                    react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5,8.8l0-0.7" }),
                    react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", d: "M8.3,10.2l0-0.7" }),
                    react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", d: "M6.2,8.8l0-0.7" }))),
            react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", x1: 8.4, y1: 3.1, x2: 8.4, y2: 0.7 })),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", x1: 0.7, y1: 0.7, x2: 8.3, y2: 0.7 }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", x1: 5.2, y1: 15.4, x2: 19.3, y2: 22.3 }),
        react_1.default.createElement("circle", { fill: "currentColor", cx: 5.3, cy: 15.4, r: 1.7 }),
        react_1.default.createElement("circle", { fill: "currentColor", cx: 19.4, cy: 22.3, r: 1.7 })))); };
exports.default = ShowerGrabBar;
//# sourceMappingURL=ShowerGrabBar.js.map
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
var Security = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { x1: 12, y1: 19, x2: 12, y2: 23, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M8.8,13.907l-5.825,3.51A2,2,0,0,0,2,19.132V23H22V19.132a2,2,0,0,0-.971-1.715L15.2,13.907", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M18,5.544V7c0,5-2.686,8-6,8S6,12,6,7V5.544", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("ellipse", { cx: 12, cy: 4, rx: 7, ry: 3, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { cx: 12, cy: 4, r: 1, fill: "currentColor", "data-cap": "butt", "data-color": "color-2", "data-stroke": "none", strokeLinecap: "round" })))); };
exports.default = Security;
//# sourceMappingURL=Security.js.map
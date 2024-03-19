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
var Camera = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("circle", { cx: "12", cy: "13", r: "5", fill: "none", strokeMiterlimit: "10" }),
        react_1.default.createElement("line", { x1: "3", y1: "2", x2: "5", y2: "2", fill: "none", stroke: "currentColor", strokeMiterlimit: "10" }),
        react_1.default.createElement("path", { d: "M21,22H3a2,2,0,0,1-2-2V7A2,2,0,0,1,3,5H7L9,2h6l2,3h4a2,2,0,0,1,2,2V20A2,2,0,0,1,21,22Z", fill: "none", stroke: "currentColor", strokeMiterlimit: "10" }),
        react_1.default.createElement("circle", { cx: "4", cy: "8", r: "1", stroke: "none" })))); };
exports.default = Camera;
//# sourceMappingURL=Camera.js.map
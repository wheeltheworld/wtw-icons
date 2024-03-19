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
var Walker = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, cx: 4.2, cy: 19.5, r: 3.1 }),
        react_1.default.createElement("circle", { fill: "currentColor", cx: 4.2, cy: 19.5, r: 0.6 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M21.3,22.5c0.6,0,1.2-0.5,1.2-1.2V20c0-0.3-0.1-0.6-0.4-0.8h0l-1-0.8c-0.1-0.1-0.2-0.2-0.3-0.2h0 c-0.1,0.1-0.2,0.1-0.3,0.2l-1,0.8h0C19.1,19.4,19,19.7,19,20v1.4c0,0.6,0.5,1.2,1.2,1.2H21.3z" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M20.7,18.2L18.3,4.6c-0.3-1.8-1.7-3.1-3.4-3.1H9.4C7.7,1.5,6.3,2.8,6,4.6c0,0,0,0,0,0L4.2,16.2" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, x1: 5.6, y1: 7.1, x2: 18.3, y2: 7.1 })))); };
exports.default = Walker;
//# sourceMappingURL=Walker.js.map
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
var HearingAid = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, cx: 14.5, cy: 15.9, r: 1.4 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M7,15.9v3c0,1.7,1.4,3,3,3h6.5c1.7,0,3-1.4,3-3s-1.4-3-3-3" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M7,15.9h2.5v-5.1c0-5.4,5-7.1,5-7.1l0-1.7h-1.9C8.1,2,4.5,4.4,4.5,8.9v7H7z" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "currentColor", d: "M6.4,12.8h1.3V14H6.4V12.8z" }),
            react_1.default.createElement("path", { fill: "currentColor", d: "M6.4,10.3h1.3v1.3H6.4V10.3z" }))))); };
exports.default = HearingAid;
//# sourceMappingURL=HearingAid.js.map
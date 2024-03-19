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
var Phone = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5 0.5)" },
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M15.1,13.9l-2.4,2.3c-1.2-0.7-2.4-1.6-3.4-2.6c-1-1-1.9-2.2-2.6-3.4l2.3-2.4c0.3-0.3,0.4-0.7,0.2-1.1L6.9,1.1 C6.7,0.7,6.2,0.4,5.7,0.5L1.3,1.7c-0.5,0.1-0.8,0.5-0.8,1c0.3,5.2,2.4,10,6,13.7c3.7,3.6,8.6,5.8,13.7,6c0.5,0,0.9-0.3,1-0.8 l1.2-4.4c0.1-0.5-0.1-1-0.6-1.2l-5.6-2.4C15.9,13.5,15.4,13.6,15.1,13.9z" })))); };
exports.default = Phone;
//# sourceMappingURL=Phone.js.map
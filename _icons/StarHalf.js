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
var StarHalf = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "currentColor" },
        react_1.default.createElement("path", { transform: "translate(.5 .5)", d: "M11.5 18.39l-6.8 3.57L6 14.39.5 9.03l7.6-1.1 3.4-6.89", style: {}, fill: "currentColor" }),
        react_1.default.createElement("path", { transform: "translate(.5 .5)", d: "M11.5 1.04l3.4 6.89 7.6 1.1-5.5 5.36 1.3 7.57-6.8-3.57-6.8 3.57L6 14.39.5 9.03l7.6-1.1z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 })))); };
exports.default = StarHalf;
//# sourceMappingURL=StarHalf.js.map
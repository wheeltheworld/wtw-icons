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
var Lock = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5 },
        react_1.default.createElement("rect", { width: "4.31", height: "8.56", x: "17.85", y: "21.39", rx: "1.79" }),
        react_1.default.createElement("rect", { width: "33.11", height: "25.93", x: "3.44", y: "12.89", className: "cls-1", rx: "2.64" }),
        react_1.default.createElement("path", { d: "M20 .88A11.09 11.09 0 0131.09 12v.93H8.91V12A11.09 11.09 0 0120 .88z", className: "cls-1" })))); };
exports.default = Lock;
//# sourceMappingURL=Lock.js.map
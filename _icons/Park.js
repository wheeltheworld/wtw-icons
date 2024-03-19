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
var Park = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeWidth: "1.5", fill: "none", stroke: "currentColor", strokeLinejoin: "round", className: "nc-icon-wrapper" },
        react_1.default.createElement("line", { x1: "1", y1: "20", x2: "14", y2: "20" }),
        react_1.default.createElement("line", { x1: "3", y1: "20", x2: "3", y2: "23" }),
        react_1.default.createElement("line", { x1: "12", y1: "20", x2: "12", y2: "23" }),
        react_1.default.createElement("line", { x1: "19", y1: "23", x2: "19", y2: "11", stroke: "currentColor" }),
        react_1.default.createElement("rect", { x: "3", y: "12", width: "9", height: "4" }),
        react_1.default.createElement("path", { d: "M21.523,7.15A4.971,4.971,0,0,0,22,5c0-2.209-1.343-4-3-4s-3,1.791-3,4a4.971,4.971,0,0,0,.477,2.15A5.509,5.509,0,0,0,15,11c0,2.761,1.791,5,4,5s4-2.239,4-5A5.509,5.509,0,0,0,21.523,7.15Z", stroke: "currentColor" })))); };
exports.default = Park;
//# sourceMappingURL=Park.js.map
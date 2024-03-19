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
var Missing = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "red", d: "M20,.23A19.75,19.75,0,0,0,.31,19.79,19.72,19.72,0,0,0,19.87,39.61H20A19.69,19.69,0,1,0,20,.23Zm0,36.71h-.13a17.12,17.12,0,0,1-12-5.07A16.87,16.87,0,0,1,3,19.83,17,17,0,1,1,20,36.94Z" }),
        react_1.default.createElement("path", { fill: "red", d: "M20,24.3a1.48,1.48,0,0,0,1.49-1.49V10.56a1.49,1.49,0,1,0-3,0V22.81A1.48,1.48,0,0,0,20,24.3Z" }),
        react_1.default.createElement("path", { fill: "red", d: "M20,27.18a2,2,0,0,0-2,2v.08a2,2,0,1,0,4,0V29.2A2,2,0,0,0,20,27.18Z" })))); };
exports.default = Missing;
//# sourceMappingURL=Missing.js.map
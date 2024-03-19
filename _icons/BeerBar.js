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
var BeerBar = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", d: "M29.77,19.32h7.1v7.1A3.56,3.56,0,0,1,33.32,30H29.77" }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", points: "29.77 16.66 29.77 38.85 4.92 38.85 4.92 16.66" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", d: "M27.11,8.67h0a9.81,9.81,0,0,0-19.53,0h0a4.53,4.53,0,0,0-4.44,5,4.48,4.48,0,0,0,4.62,3.91H12v7.1a3.56,3.56,0,0,0,3.55,3.55h0a3.56,3.56,0,0,0,3.55-3.55v-7.1h7.81a4.46,4.46,0,0,0,4.61-3.91A4.53,4.53,0,0,0,27.11,8.67Z" })))); };
exports.default = BeerBar;
//# sourceMappingURL=BeerBar.js.map
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
var Baggage = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", x1: "5", y1: "21", x2: "5", y2: "23", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", x1: "19", y1: "21", x2: "19", y2: "23", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", x1: "9", y1: "15", x2: "15", y2: "15", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", d: "M21,21H3V7c0-1.1,0.9-2,2-2 h14c1.1,0,2,0.9,2,2V21z", strokeLinejoin: "round" }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", points: "15,5 15,1 9,1 9,5 ", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeMiterlimit: "10", x1: "3", y1: "11", x2: "21", y2: "11", strokeLinejoin: "round" })))); };
exports.default = Baggage;
//# sourceMappingURL=Baggage.js.map
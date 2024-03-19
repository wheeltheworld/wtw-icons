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
var Baby = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("circle", { "data-stroke": "none", fill: "currentColor", cx: 8.5, cy: 14.5, r: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("circle", { "data-stroke": "none", fill: "currentColor", cx: 15.5, cy: 14.5, r: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, d: "M23,13 c0-1.487-1.085-2.713-2.505-2.95C19.273,6.53,15.936,4,12,4s-7.273,2.53-8.495,6.05C2.085,10.287,1,11.513,1,13 s1.085,2.713,2.505,2.95C4.727,19.47,8.064,22,12,22s7.273-2.53,8.495-6.05C21.915,15.713,23,14.487,23,13z", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { "data-cap": "butt", "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M12,7 c-0.25-3.583,1.667-5.792,5-6", strokeLinejoin: "round", strokeLinecap: "round" })))); };
exports.default = Baby;
//# sourceMappingURL=Baby.js.map
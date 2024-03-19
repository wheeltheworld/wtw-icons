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
var Help = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("circle", { cx: 12, cy: 12, r: 11, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("circle", { "data-color": "color-2", "data-stroke": "none", cx: 12, cy: 18, r: 1, stroke: "none" }),
        react_1.default.createElement("path", { "data-color": "color-2", d: "M9.853,6.56c1.98-.875,4.542-.771,5.417.645s.271,3.063-1.229,4.334S12,13.5,12,14.5", fill: "none", strokeMiterlimit: 10 })))); };
exports.default = Help;
//# sourceMappingURL=Help.js.map
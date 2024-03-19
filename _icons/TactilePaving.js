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
var TactilePaving = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }),
    react_1.default.createElement("g", { clipPath: "url(#clip0_1585_241)" },
        react_1.default.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip1_1585_241)" },
            react_1.default.createElement("path", { d: "M22.807 1.17H1.193v21.66h21.614V1.17zM6.28 4.345v6.226M10.097 4.345v6.226M17.72 4.345v6.226M13.903 4.345v6.226M6.28 13.326v6.227M10.097 13.326v6.227M17.72 13.326v6.227M13.903 13.326v6.227" }))),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_1585_241" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H24V24H0z" })),
        react_1.default.createElement("clipPath", { id: "clip1_1585_241" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H22.8V22.8H0z", transform: "translate(.6 .6)" }))))); };
exports.default = TactilePaving;
//# sourceMappingURL=TactilePaving.js.map
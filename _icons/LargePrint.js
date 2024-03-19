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
var LargePrint = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }),
    react_1.default.createElement("g", { clipPath: "url(#clip0_1585_196)" },
        react_1.default.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip1_1585_196)" },
            react_1.default.createElement("path", { d: "M5.961 22.841h6.387M8.958 22.714V1.19M9.171 2.53h8.8M11.057 2.53v15.81h5.657V2.53" }))),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_1585_196" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H24V24H0z" })),
        react_1.default.createElement("clipPath", { id: "clip1_1585_196" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H13.2V23.4H0z", transform: "translate(5.4)" }))))); };
exports.default = LargePrint;
//# sourceMappingURL=LargePrint.js.map
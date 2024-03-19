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
var TermsAndConditions = function (props) {
    return (react_1.default.createElement(Icon_1.default, __assign({ fill: "none", viewBox: "0 0 20 28" }, props),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M1.421 2h13.395c.105 0 .237.05.316.126l3.763 3.89a.367.367 0 01.105.277v19.305a.406.406 0 01-.421.402H1.42A.406.406 0 011 25.598V2.402C1 2.176 1.184 2 1.421 2z" }),
            react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M14.345 2.975v3.69c0 .251.21.452.5.452l3.526.025M4.184 11.013h6.448M4.08 14.522h11.605M4.08 18.575h11.605" }))));
};
exports.default = TermsAndConditions;
//# sourceMappingURL=TermsAndConditions.js.map
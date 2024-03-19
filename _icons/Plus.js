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
var Plus = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "currentColor", d: "M20,3.24A17.94,17.94,0,1,1,2.06,21.17,18,18,0,0,1,20,3.24m0-.5A18.44,18.44,0,1,0,38.44,21.17,18.44,18.44,0,0,0,20,2.74Z" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: ".5", d: "M13.77,21.17H26.23" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: ".5", d: "M20,27.4V14.94" })))); };
exports.default = Plus;
//# sourceMappingURL=Plus.js.map
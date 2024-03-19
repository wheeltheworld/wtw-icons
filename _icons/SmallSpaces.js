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
var SmallSpaces = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }),
    react_1.default.createElement("path", { stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M22.027 1H1.973A.973.973 0 001 1.973v20.054c0 .538.435.973.973.973h20.054a.973.973 0 00.973-.973V1.973A.973.973 0 0022.027 1z" }),
    react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M3.834 12.394h6.405M8.286 10.214l2.146 2.146M10.382 12.42l-2.096 2.104M20.108 12.394h-6.406M15.656 10.214l-2.147 2.146M13.551 12.42l2.105 2.104" }))); };
exports.default = SmallSpaces;
//# sourceMappingURL=SmallSpaces.js.map
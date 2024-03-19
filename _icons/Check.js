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
var Check = function (props) {
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 14 10", fill: "none" }, props),
        react_1.default.createElement("path", { d: "M1 5L5 9L13 1", stroke: "currentColor", strokeWidth: "1.5", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.default = Check;
//# sourceMappingURL=Check.js.map
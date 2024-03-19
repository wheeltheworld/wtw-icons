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
var More = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 42 42" }, props),
    react_1.default.createElement("path", { d: "M15 21.2227H27", stroke: "currentColor", strokeWidth: "2" }),
    react_1.default.createElement("path", { d: "M21 15.2227V27.2227", stroke: "currentColor", strokeWidth: "2" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M41 21.2227C41 32.2687 32.046 41.2227 21 41.2227C9.954 41.2227 1 32.2687 1 21.2227C1 10.1767 9.954 1.22266 21 1.22266C32.046 1.22266 41 10.1767 41 21.2227Z", strokeWidth: "1.4", stroke: "currentColor", fill: "none" }))); };
exports.default = More;
//# sourceMappingURL=More.js.map
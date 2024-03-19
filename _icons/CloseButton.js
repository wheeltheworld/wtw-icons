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
var CloseButton = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 26 26" }, props),
    react_1.default.createElement("g", { fill: "none", className: "nc-icon-wrapper" },
        react_1.default.createElement("path", { fillRule: "evenodd", stroke: "currentColor", strokeWidth: "1.5", d: "M13 1.6c6.296 0 11.4 5.104 11.4 11.4S19.296 24.4 13 24.4 1.6 19.296 1.6 13 6.704 1.6 13 1.6z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M17.145 8.855l-8.29 8.29M17.145 17.145l-8.29-8.29" })))); };
exports.default = CloseButton;
//# sourceMappingURL=CloseButton.js.map
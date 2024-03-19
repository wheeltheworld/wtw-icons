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
var Heartbeat = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", className: "nc-icon-wrapper" },
        react_1.default.createElement("path", { d: "M1 11L8 11 10 8 14 14 16 11 23 11" }),
        react_1.default.createElement("path", { d: "M5 14.2a58.932 58.932 0 007 7.8 58.932 58.932 0 007-7.8M22 7.429A5.458 5.458 0 0016.545 2 5.521 5.521 0 0012 4.443 5.521 5.521 0 007.455 2 5.458 5.458 0 002 7.429" })))); };
exports.default = Heartbeat;
//# sourceMappingURL=Heartbeat.js.map
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
var MobilePhone = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
    react_1.default.createElement("g", { stroke: "currentColor", strokeWidth: "1.5" },
        react_1.default.createElement("rect", { width: "10.5", height: "18.5", x: "6.75", y: "2.75", rx: "1.25" }),
        react_1.default.createElement("path", { strokeLinecap: "round", d: "M10 5h4" })))); };
exports.default = MobilePhone;
//# sourceMappingURL=MobilePhoneV2.js.map
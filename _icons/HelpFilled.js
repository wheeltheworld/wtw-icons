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
var HelpFilled = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ fill: "none", viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("path", { fill: "#8B8B8B", d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" }),
    react_1.default.createElement("path", { fill: "#fff", d: "M12 19a1 1 0 100-2 1 1 0 000 2z" }),
    react_1.default.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M10 7.527c1.7-.824 3.9-.726 4.652.607.752 1.333.233 2.883-1.055 4.08-1.288 1.195-1.753 1.845-1.753 2.786" }))); };
exports.default = HelpFilled;
//# sourceMappingURL=HelpFilled.js.map
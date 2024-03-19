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
var Work = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5", className: "nc-icon-wrapper", transform: "translate(.5 .5)" },
        react_1.default.createElement("path", { d: "M16 7L16 2 8 2 8 7", "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M1 7H23V22H1z" }),
        react_1.default.createElement("path", { d: "M5 7L5 22" }),
        react_1.default.createElement("path", { d: "M19 7L19 22" })))); };
exports.default = Work;
//# sourceMappingURL=Work.js.map
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
var Clothes = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", className: "nc-icon-wrapper" },
        react_1.default.createElement("path", { d: "M14 9L16 9" }),
        react_1.default.createElement("path", { d: "M5 20L5 11" }),
        react_1.default.createElement("path", { d: "M19 20L19 11" }),
        react_1.default.createElement("path", { d: "M1 17L5 17" }),
        react_1.default.createElement("path", { d: "M19 17L23 17" }),
        react_1.default.createElement("path", { d: "M16 1c0 2.2-1.8 4-4 4S8 3.2 8 1H4C2.3 1 1 2.3 1 4v16h4v3h14v-3h4V4c0-1.7-1.3-3-3-3h-4z" })))); };
exports.default = Clothes;
//# sourceMappingURL=Clothes.js.map
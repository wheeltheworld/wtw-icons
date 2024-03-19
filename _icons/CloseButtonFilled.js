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
var CloseButtonFilled = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", className: "nc-icon-wrapper" },
        react_1.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M16 8l-8 8M16 16L8 8" })))); };
exports.default = CloseButtonFilled;
//# sourceMappingURL=CloseButtonFilled.js.map
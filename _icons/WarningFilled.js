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
var WarningFilled = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("path", { fill: "#D17F05", d: "M12.5,1.5c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S18.6,1.5,12.5,1.5z M11.7,7.5c0-0.4,0.3-0.8,0.8-0.8 c0.4,0,0.8,0.3,0.8,0.8v6c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8V7.5z M12.5,18.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1 S13.1,18.5,12.5,18.5z" }))); };
exports.default = WarningFilled;
//# sourceMappingURL=WarningFilled.js.map
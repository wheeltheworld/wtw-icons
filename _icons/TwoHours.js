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
var TwoHours = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ fill: "none", viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("path", { stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5", d: "M12 23.2c-2.3 0-4.5-.7-6.4-2-1.9-1.3-3.3-3.2-4.1-5.3C1 14.4.7 13 .8 11.5c.1-1.5.4-2.9 1-4.2 1-2 2.4-3.6 4.2-4.7C7.8 1.5 9.9.8 12 .8c2.3 0 4.5.7 6.4 2 1.9 1.3 3.3 3.2 4.1 5.3.5 1.4.7 2.8.7 4.3-.1 1.5-.4 2.9-1 4.2-.9 1.9-2.3 3.6-4.1 4.7-1.9 1.3-4 1.9-6.1 1.9z" }),
    react_1.default.createElement("path", { fill: "currentColor", d: "M12.1 11.8c0 .1 0 .2.1.2h.2l8-4.9c-.1-.2-.3-.5-.5-.7-.8-1.1-1.9-2.1-3.1-2.8-.2-.1-.5-.3-.7-.4-1.3-.6-2.6-.9-4-.9v9.5z" }))); };
exports.default = TwoHours;
//# sourceMappingURL=TwoHours.js.map
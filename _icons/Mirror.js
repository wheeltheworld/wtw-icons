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
var Mirror = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M16 1.2H8a2 2 0 00-2 2v13a2 2 0 002 2h8a2 2 0 002-2v-13a2 2 0 00-2-2z" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M13 5.2l-7 7 1-1M12 14.2l6-6-1 1M3 1.2v22M21 1.2v22M3 21.2h18" })))); };
exports.default = Mirror;
//# sourceMappingURL=Mirror.js.map
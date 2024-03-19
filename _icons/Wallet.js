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
var Wallet = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ fill: "none", viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", { clipPath: "url(#clip0_856_21786)" },
        react_1.default.createElement("path", { fill: "#fff", d: "M28.25 2l6 10-26.5-.5 15-9.5 3-1 2.5 1z" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", d: "M28.177 4L15 11.5" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", d: "M30.5 6.5L21 12" }),
        react_1.default.createElement("path", { fill: "#fff", stroke: "currentColor", strokeWidth: "2", d: "M34 12H4a3 3 0 00-3 3v21a3 3 0 003 3h30a3 3 0 003-3V15a3 3 0 00-3-3z" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", d: "M7 11.5L24.585 1.478a3 3 0 014.084 1.106l5.258 9.108" }),
        react_1.default.createElement("path", { fill: "#fff", stroke: "currentColor", strokeWidth: "2", d: "M26 25.5a4.5 4.5 0 014.5-4.5H36a3 3 0 013 3v3a3 3 0 01-3 3h-5.5a4.5 4.5 0 01-4.5-4.5z" }),
        react_1.default.createElement("rect", { width: "3", height: "3", x: "29", y: "24", fill: "currentColor", rx: "1.5" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_856_21786" },
            react_1.default.createElement("path", { fill: "#fff", d: "M0 0H40V40H0z" }))))); };
exports.default = Wallet;
//# sourceMappingURL=Wallet.js.map
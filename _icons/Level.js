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
var Level = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("rect", { x: 2, y: 14, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 4, height: 6 }),
        react_1.default.createElement("rect", { "data-color": "color-2", x: 10, y: 9, fill: "none", strokeMiterlimit: 10, width: 4, height: 11 }),
        react_1.default.createElement("rect", { x: 18, y: 4, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 4, height: 16 })))); };
exports.default = Level;
//# sourceMappingURL=Level.js.map
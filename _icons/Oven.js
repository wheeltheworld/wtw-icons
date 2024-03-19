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
var Oven = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("rect", { "data-color": "color-2", x: 5, y: 9, width: 14, height: 10, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 5, y1: 5, x2: 7, y2: 5, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 11, y1: 5, x2: 13, y2: 5, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 17, y1: 5, x2: 19, y2: 5, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("rect", { x: 1, y: 1, width: 22, height: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 9, y1: 13, x2: 15, y2: 13, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 })))); };
exports.default = Oven;
//# sourceMappingURL=Oven.js.map
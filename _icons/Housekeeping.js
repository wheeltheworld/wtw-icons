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
var Housekeeping = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("rect", { x: 8, y: 1, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 13, height: 4 }),
        react_1.default.createElement("path", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M19,5l0,18H8 v-6c0,0,6-4,6-12" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 1, y1: 3, x2: 3, y2: 3 }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 3.05, y1: 7.95, x2: 4.464, y2: 6.536 })))); };
exports.default = Housekeeping;
//# sourceMappingURL=Housekeeping.js.map
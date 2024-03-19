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
var Delete = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 1, y1: 5, x2: 23, y2: 5, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { "data-color": "color-2", d: "M8,5V2A1,1,0,0,1,9,1h6a1,1,0,0,1,1,1V5", fill: "none", strokeMiterlimit: 10 })))); };
exports.default = Delete;
//# sourceMappingURL=Delete.js.map
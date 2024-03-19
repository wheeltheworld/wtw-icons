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
var Champagne = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 8, y1: 9, x2: 16, y2: 9 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,17L12,17 c-2.2,0-4-1.8-4-4V1h8v12C16,15.2,14.2,17,12,17z" }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 23 }),
        react_1.default.createElement("line", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, x1: 8, y1: 23, x2: 16, y2: 23 })))); };
exports.default = Champagne;
//# sourceMappingURL=Champagne.js.map
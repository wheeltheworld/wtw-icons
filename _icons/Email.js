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
var Email = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("polyline", { "data-color": "color-2", points: "19 7 12 14 5 7", fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("rect", { x: 1, y: 3, width: 22, height: 18, rx: 2, ry: 2, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 7, y1: 15, x2: 5, y2: 17, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-color": "color-2", x1: 17, y1: 15, x2: 19, y2: 17, fill: "none", strokeMiterlimit: 10 })))); };
exports.default = Email;
//# sourceMappingURL=Email.js.map
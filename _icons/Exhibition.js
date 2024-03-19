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
var Exhibition = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeWidth: 1.5, fill: "none", stroke: "currentColor", strokeLinejoin: "round", className: "nc-icon-wrapper" },
        react_1.default.createElement("rect", { x: 4, y: 1, width: 16, height: 10, stroke: "currentColor" }),
        react_1.default.createElement("line", { x1: 1, y1: 23, x2: 1, y2: 15 }),
        react_1.default.createElement("line", { x1: 23, y1: 23, x2: 23, y2: 15 }),
        react_1.default.createElement("line", { x1: 12, y1: 23, x2: 12, y2: 15 }),
        react_1.default.createElement("path", { d: "M1,16.665A9.943,9.943,0,0,0,12,16a9.943,9.943,0,0,0,11,.665", "data-cap": "butt" })))); };
exports.default = Exhibition;
//# sourceMappingURL=Exhibition.js.map
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
var Upload = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 12, y1: 2, x2: 12, y2: 16, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("polyline", { "data-color": "color-2", points: "8 6 12 2 16 6", fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("polyline", { points: "17 10 22 10 22 22 2 22 2 10 7 10", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 })))); };
exports.default = Upload;
//# sourceMappingURL=Upload.js.map
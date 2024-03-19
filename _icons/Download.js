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
var Download = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 16, x2: 12, y2: 3 }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, points: "17,3 23,3 23,21 1,21 1,3 7,3 " }),
        react_1.default.createElement("polyline", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, points: " 17,11 12,16 7,11 " })))); };
exports.default = Download;
//# sourceMappingURL=Download.js.map
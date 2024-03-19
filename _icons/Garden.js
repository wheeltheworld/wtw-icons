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
var Garden = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, d: "M18,9h-1 c-2.76142,0-5,2.23858-5,5v2h1c2.76142,0,5-2.23858,5-5V9z" }),
        react_1.default.createElement("path", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, d: "M6,4h1 c2.76142,0,5,2.23858,5,5v2h-1c-2.76142,0-5-2.23858-5-5V4z" }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 19.12636, x2: 12, y2: 1 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M1,23h5 c0-1.10461,0.89545-2,2-2c0.49872,0,0.94916,0.18909,1.29944,0.49103C9.89551,20.03088,11.32544,19,13,19c2.20917,0,4,1.79083,4,4h6 " })))); };
exports.default = Garden;
//# sourceMappingURL=Garden.js.map
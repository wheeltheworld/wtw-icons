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
var Iron = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("polyline", { "data-cap": "butt", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, points: "1,16 1,20 22,20 20,16 " }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M20,16H1V8h11 C16.4,8,20,11.6,20,16L20,16z" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M1,8V6c0-1.1,0.9-2,2-2h7" })))); };
exports.default = Iron;
//# sourceMappingURL=Iron.js.map
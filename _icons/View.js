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
var View = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M1.373,13.183a2.064,2.064,0,0,1,0-2.366C2.946,8.59,6.819,4,12,4s9.054,4.59,10.627,6.817a2.064,2.064,0,0,1,0,2.366C21.054,15.41,17.181,20,12,20S2.946,15.41,1.373,13.183Z", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("circle", { "data-color": "color-2", cx: 12, cy: 12, r: 4, fill: "none", strokeMiterlimit: 10 })))); };
exports.default = View;
//# sourceMappingURL=View.js.map
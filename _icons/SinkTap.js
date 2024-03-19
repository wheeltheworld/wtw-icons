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
var SinkTap = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, d: "M16,20 c0-1.9,3-5,3-5s3,3.1,3,5s-1.5,3-3,3S16,21.9,16,20z" }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, points: "12,1 1,1 1,5 " }),
        react_1.default.createElement("polygon", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, points: "1,5 23,5 23,11 7,11 7,23 1,23 " })))); };
exports.default = SinkTap;
//# sourceMappingURL=SinkTap.js.map
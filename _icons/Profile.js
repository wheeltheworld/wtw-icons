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
var Profile = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("circle", { cx: "20", cy: "21.18", r: "18.44", fill: "#f0f0f1" })),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "currentColor", d: "M20,12.67a4.12,4.12,0,1,0,4.12,4.12A4.11,4.11,0,0,0,20,12.67Zm0,6.57a2.45,2.45,0,1,1,2.45-2.45A2.45,2.45,0,0,1,20,19.24Z" }),
        react_1.default.createElement("path", { fill: "currentColor", d: "M23.36,22.57H16.64a4.08,4.08,0,0,0-4.08,4.08v1.58a.84.84,0,0,0,.84.83h0a.84.84,0,0,0,.84-.83V26.65a2.4,2.4,0,0,1,2.4-2.41h6.72a2.4,2.4,0,0,1,2.4,2.41v1.58a.84.84,0,0,0,.84.83h0a.84.84,0,0,0,.84-.83V26.65A4.08,4.08,0,0,0,23.36,22.57Z" })))); };
exports.default = Profile;
//# sourceMappingURL=Profile.js.map
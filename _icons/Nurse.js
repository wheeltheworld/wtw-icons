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
var Nurse = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", cx: "20", cy: "20.41", r: "18.44" }),
        react_1.default.createElement("polygon", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", points: "30.06 17.05 23.35 17.05 23.35 10.35 16.65 10.35 16.65 17.05 9.94 17.05 9.94 23.76 16.65 23.76 16.65 30.47 23.35 30.47 23.35 23.76 30.06 23.76 30.06 17.05" })))); };
exports.default = Nurse;
//# sourceMappingURL=Nurse.js.map
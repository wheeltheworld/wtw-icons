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
var Icon_1 = __importDefault(require("../components/Icon"));
var react_1 = __importDefault(require("react"));
var Places = function (props) {
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "currentColor", d: "M20,6.39a7.29,7.29,0,1,0,7.29,7.29h0A7.31,7.31,0,0,0,20,6.39Zm0,12.69a5.4,5.4,0,1,1,5.4-5.4h0A5.4,5.4,0,0,1,20,19.08Z" }),
            react_1.default.createElement("path", { fill: "currentColor", d: "M20,0A13.7,13.7,0,0,0,6.32,13.68c0,5.38,3.79,12.57,6.06,16.38a69.8,69.8,0,0,0,4.38,6.55c2.3,3,2.84,3,3.24,3s.94,0,3.24-3a69.8,69.8,0,0,0,4.38-6.55c2.27-3.81,6.06-11,6.06-16.38A13.7,13.7,0,0,0,20,0Zm0,37.54c-2.35-2.2-11.8-16-11.8-23.86a11.8,11.8,0,0,1,23.6,0C31.8,21.58,22.35,35.34,20,37.54Z" }))));
};
exports.default = Places;
//# sourceMappingURL=Places.js.map
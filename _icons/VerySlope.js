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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../components/Icon"));
var VerySlope = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 60 35" }, props),
        react_1.default.createElement("g", { fill: "none", className: "nc-icon-wrapper" },
            react_1.default.createElement("path", { d: "M58.8834 9.81952C58.1647 9.43256 57.2517 9.43256 56.5329 9.81952L3.94596 42.6034C3.03291 43.1208 2.57534 44.2196 2.83651 45.2542C3.09768 46.2889 4.07759 47.0007 5.12227 47.0007H57.6445C58.9503 47.0007 59.995 45.966 59.995 44.6727V11.8888C60.0598 11.0487 59.6022 10.2727 58.8855 9.81952H58.8834Z", fill: "#007187" }),
            react_1.default.createElement("path", { d: "M3.07971 25.4195C3.495 25.3994 3.90241 25.2617 4.30621 25.0081L24.4957 12.1048L26.741 15.5226C27.1938 16.2653 28.0454 16.6945 28.9323 16.6517L28.9907 16.6489C29.8776 16.6061 30.6802 16.039 31.058 15.2563L36.2129 4.25522C36.5906 3.47252 36.4869 2.59703 36.0391 1.91424C35.5893 1.23154 34.7982 0.799424 33.9668 0.779458L21.6282 0.844407C20.7384 0.829327 19.933 1.33848 19.4967 2.12193C19.0605 2.90745 19.1065 3.84374 19.6178 4.58355L21.8631 8.00134L1.61312 20.9075C0.46158 21.6095 0.121224 23.1528 0.890601 24.2924C1.34132 25.0351 2.19498 25.4642 3.0819 25.4214L3.07971 25.4195Z", fill: "#007187" }))));
};
exports.default = VerySlope;
//# sourceMappingURL=VerySlope.js.map
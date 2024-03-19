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
var Accessibility = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "11", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
        react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5" },
            react_1.default.createElement("path", { strokeLinecap: "round", d: "M15.5 18.9l-1.6-5" }),
            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.1 9H13.899999999999999V13.9H10.1z" }),
            react_1.default.createElement("circle", { cx: "12", cy: "5.7", r: "1.4" }),
            react_1.default.createElement("path", { strokeLinecap: "round", d: "M13.9 9l3.7-.8M6.3 8.1l3.8.9M10.1 13.9l-1.6 5" }))));
};
exports.default = Accessibility;
//# sourceMappingURL=Accessibility.js.map
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
var Filter = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
        react_1.default.createElement("path", { stroke: stroke, strokeLinecap: "round", strokeWidth: "1.5", fill: "none", d: "M2 6h3m17 0H9M22 12h-3M2 12h13M22 18H11m-9 0h5" }),
        react_1.default.createElement("circle", { cx: "7", cy: "6", r: "2", stroke: stroke, fill: "none", strokeWidth: "1.5" }),
        react_1.default.createElement("circle", { cx: "17", cy: "12", r: "2", fill: "none", stroke: stroke, strokeWidth: "1.5", transform: "rotate(-180 17 12)" }),
        react_1.default.createElement("circle", { cx: "9", cy: "18", r: "2", fill: "none", stroke: stroke, strokeWidth: "1.5", transform: "rotate(-180 9 18)" })));
};
exports.default = Filter;
//# sourceMappingURL=Filter.js.map
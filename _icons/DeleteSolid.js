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
var DeleteSolid = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
        react_1.default.createElement("g", { fill: "currentColor", className: "nc-icon-wrapper" },
            react_1.default.createElement("path", { d: "M3.87 21.214A3.01 3.01 0 006.862 24h10.276a3.01 3.01 0 002.992-2.786L21.074 8H2.926z" }),
            react_1.default.createElement("path", { d: "M23 4h-6V1a1 1 0 00-1-1H8a1 1 0 00-1 1v3H1a1 1 0 000 2h22a1 1 0 000-2zM9 2h6v2H9z", "data-color": "color-2" }))));
};
exports.default = DeleteSolid;
//# sourceMappingURL=DeleteSolid.js.map
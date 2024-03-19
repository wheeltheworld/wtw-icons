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
var CompletelyFlat = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 60 60" }, props),
        react_1.default.createElement("g", { fill: "none", className: "nc-icon-wrapper" },
            react_1.default.createElement("path", { fill: "none", d: "M0 0H60V60H0z" }),
            react_1.default.createElement("path", { fill: "#007187", d: "M9.3 30.397c.379.229.821.345 1.324.349l25.298-.045.021 4.552a2.71 2.71 0 001.292 2.372l.053.034c.81.49 1.846.438 2.63-.071l10.89-7.247c.785-.51 1.196-1.394 1.192-2.3a2.887 2.887 0 00-1.181-2.305l-10.964-7.314c-.778-.547-1.785-.551-2.624-.075-.838.476-1.334 1.382-1.31 2.383l.022 4.552-25.354.012C9.165 25.264 7.976 26.508 8 28.04a2.703 2.703 0 001.292 2.372l.007-.015zM56.255 42H3.745C1.677 42 0 43.237 0 44.764v12.472C0 58.763 1.677 60 3.745 60h52.51C58.323 60 60 58.763 60 57.236V44.764C60 43.237 58.323 42 56.255 42z" }))));
};
exports.default = CompletelyFlat;
//# sourceMappingURL=CompletelyFlat.js.map
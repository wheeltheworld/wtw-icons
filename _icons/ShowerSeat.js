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
var ShowerSeat = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
        react_1.default.createElement("path", { fill: "none", stroke: stroke, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M6.5 8.3h6.8c0-1.9-1.5-3.4-3.4-3.4S6.5 6.4 6.5 8.3z" }),
        react_1.default.createElement("path", { stroke: stroke, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M4.5 21.75V4.2c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v.7M12 11.3v-.7M9.9 12.6v-.7M7.9 11.3v-.7M19.5 9v13.5m-.5-6.75h-6.25v6.75" })));
};
exports.default = ShowerSeat;
//# sourceMappingURL=ShowerSeat.js.map
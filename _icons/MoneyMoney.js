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
var MoneyMoney = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
        react_1.default.createElement("g", { stroke: stroke, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5", clipPath: "url(#clip0_785_41727)", fill: "none" },
            react_1.default.createElement("path", { d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zM8.438 6.088V18M16.096 6.088V18" }),
            react_1.default.createElement("path", { d: "M11.31 7.976c-1.38-.758-5.725-1.324-5.725 1.287 0 3.126 5.517 2.023 5.517 4.781 0 2.759-3.585 2.551-6.068 1.655M18.967 7.976c-1.38-.758-5.724-1.324-5.724 1.287 0 3.126 5.517 2.023 5.517 4.781 0 2.759-3.586 2.551-6.069 1.655" }))));
};
exports.default = MoneyMoney;
//# sourceMappingURL=MoneyMoney.js.map
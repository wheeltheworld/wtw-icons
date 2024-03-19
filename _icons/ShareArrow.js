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
var ShareArrow = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        react_1.default.createElement("path", { fill: "currentColor", d: "M22.584 11.013c.278.264.416.59.416.98 0 .373-.139.7-.416.978l-5.862 5.898c-.406.411-.757.55-1.052.424-.294-.121-.44-.467-.44-1.033v-3.94c-2.084.02-3.921.244-5.504.678-1.584.433-2.92 1.018-4.01 1.757-1.092.741-1.947 1.613-2.568 2.616a8.217 8.217 0 00-1.169 3.235c-.032.263-.18.394-.444.394h-.024c-.26 0-.41-.13-.44-.395-.05-.403-.071-.808-.071-1.217 0-1.66.282-3.23.853-4.695a10.389 10.389 0 012.603-3.854c1.166-1.095 2.642-1.967 4.43-2.61 1.786-.648 3.902-.98 6.343-.993V5.739c0-.576.144-.92.431-1.039.285-.12.64.025 1.062.43l5.862 5.883z" })));
};
exports.default = ShareArrow;
//# sourceMappingURL=ShareArrow.js.map
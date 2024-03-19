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
var GentleSlope = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'none' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 60 15" }, props),
        react_1.default.createElement("g", { fill: "#007187", className: "nc-icon-wrapper" },
            react_1.default.createElement("path", { d: "M58.828 18.443a2.875 2.875 0 00-2.464 0L1.24 31.787C.282 32.28-.197 33.33.076 34.32c.274.989 1.301 1.669 2.396 1.669H57.53c1.368 0 2.464-.989 2.464-2.225V20.421c.068-.803-.412-1.545-1.163-1.978h-.003zM1.506 18.572c.397.14.832.168 1.307.079l23.907-4.56.788 4.139c.137.884.77 1.625 1.62 1.926l.056.02c.848.301 1.821.07 2.476-.534l9.075-8.543c.655-.604.896-1.482.739-2.31a2.622 2.622 0 00-1.506-1.885l-11.593-4.7c-.83-.358-1.781-.183-2.492.4-.71.584-1.03 1.5-.835 2.405l.788 4.138-23.966 4.54c-1.35.229-2.264 1.576-1.983 2.961.138.885.77 1.626 1.62 1.927l-.001-.003z" }))));
};
exports.default = GentleSlope;
//# sourceMappingURL=GentleSlope.js.map
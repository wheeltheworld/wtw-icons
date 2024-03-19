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
var Coupon = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, props = __rest(_a, ["fill"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 100 100" }, props),
        react_1.default.createElement("g", { fill: "none" },
            react_1.default.createElement("path", { d: "M80.5554 50.0001C80.5554 43.507 85.5207 38.5418 92.0137 38.5418V19.4445H7.98596V38.5418C14.479 38.5418 19.4443 43.507 19.4443 50.0001C19.4443 56.4931 14.479 61.4584 7.98596 61.4584V80.5556H92.0137V61.4584C85.5207 61.4584 80.5554 56.4931 80.5554 50.0001Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
            react_1.default.createElement("path", { d: "M61.4582 38.5417L38.5415 61.4584", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
            react_1.default.createElement("path", { d: "M40.4512 42.3612C43.6153 42.3612 46.1804 39.7962 46.1804 36.632C46.1804 33.4679 43.6153 30.9029 40.4512 30.9029C37.2871 30.9029 34.722 33.4679 34.722 36.632C34.722 39.7962 37.2871 42.3612 40.4512 42.3612Z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M59.5485 69.0973C62.7126 69.0973 65.2777 66.5323 65.2777 63.3681C65.2777 60.204 62.7126 57.639 59.5485 57.639C56.3844 57.639 53.8193 60.204 53.8193 63.3681C53.8193 66.5323 56.3844 69.0973 59.5485 69.0973Z", fill: "currentColor" }))));
};
exports.default = Coupon;
//# sourceMappingURL=Coupon.js.map
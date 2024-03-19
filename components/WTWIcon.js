"use strict";
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
var helpers_1 = require("../helpers");
var WTWIcon = function (_a) {
    var icon = _a.icon, props = __rest(_a, ["icon"]);
    if (!(icon in helpers_1.iconsObject)) {
        console.error(icon + " is not a valid icon!!");
        return react_1.default.createElement(helpers_1.iconsObject['missing'], props);
    }
    return react_1.default.createElement(helpers_1.iconsObject[icon], props);
};
exports.default = WTWIcon;
//# sourceMappingURL=WTWIcon.js.map
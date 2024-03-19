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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../components/Icon"));
var MobilePhone = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "currentColor", d: "M27.8,0H12.2a3,3,0,0,0-3,3h0V36.61a3,3,0,0,0,3,3H27.8a3,3,0,0,0,3-3h0V3a3,3,0,0,0-3-3ZM10.4,6.63H29.6V32H10.4Zm1.8-5.44H27.8A1.81,1.81,0,0,1,29.61,3h0V5.43H10.4V3a1.79,1.79,0,0,1,1.79-1.81ZM27.8,38.42H12.2a1.81,1.81,0,0,1-1.81-1.8h0V33.23H29.6v3.38a1.8,1.8,0,0,1-1.79,1.81Z" }),
        react_1.default.createElement("circle", { fill: "currentColor", cx: "20", cy: "35.94", r: "1.7" }),
        react_1.default.createElement("path", { fill: "currentColor", d: "M17.62,4h4.76a.6.6,0,0,0,.19-1.19.61.61,0,0,0-.19,0H17.62a.61.61,0,0,0-.69.5.6.6,0,0,0,.5.69Z" })))); };
exports.default = MobilePhone;
//# sourceMappingURL=MobilePhone.js.map
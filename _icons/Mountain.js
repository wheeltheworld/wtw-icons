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
var Mountain = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("g", { stroke: "currentColor", clipPath: "url(#clip0)" },
            react_1.default.createElement("path", { d: "M22.577 23.044l-4.306-6.92a.187.187 0 00-.317 0L15.51 19.96a.178.178 0 01-.243.065.179.179 0 01-.066-.065l-5.698-9.671a.187.187 0 00-.318 0L.623 23.044a.13.13 0 00.105.203h21.735a.13.13 0 00.12-.066.131.131 0 00-.006-.137zM10.53 16.027l2.181 3.671M18.703 19.828l.936 1.58" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0" },
                react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H24V24H0z" })))))); };
exports.default = Mountain;
//# sourceMappingURL=Mountain.js.map
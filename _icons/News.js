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
var News = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({}, props, { fill: "none", viewBox: "0 0 25 22" }),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", d: "M7.938 3.945h13.8M7.938 17.037h13.8M7.938 12.413h6.9M7.938 8.57h6.9" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeMiterlimit: "10", d: "M21.089 7.848h-3.362c-.294 0-.59.24-.59.601v4.024c0 .3.237.6.59.6h3.362c.295 0 .59-.24.59-.6V8.449c0-.3-.236-.6-.59-.6z" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeMiterlimit: "10", d: "M3.043 21.002h19.815c.59 0 1.061-.481 1.061-1.082V2.083c0-.601-.472-1.082-1.061-1.082H6.405c-.59 0-1.062.481-1.062 1.082v16.876c0 1.142-.884 2.043-2.005 2.043-1.12 0-2.005-.901-2.005-2.043V8.57h3.951" })))); };
exports.default = News;
//# sourceMappingURL=News.js.map
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
var ProfileOutline = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 50 50", fill: "none" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("circle", { cx: 25, cy: 25, r: 24, stroke: "currentColor", strokeWidth: 2 }),
        react_1.default.createElement("g", { clipPath: "url(#clip0)" },
            react_1.default.createElement("path", { d: "M34.885 35.3913V32.495C34.885 29.7511 32.7198 27.6169 29.9359 27.6169H19.7282C16.9443 27.6169 14.779 29.7511 14.779 32.495V35.3913", stroke: "currentColor", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round" }),
            react_1.default.createElement("path", { d: "M24.8321 23.1964C27.8217 23.1964 30.2452 20.8076 30.2452 17.861C30.2452 14.9144 27.8217 12.5256 24.8321 12.5256C21.8424 12.5256 19.4189 14.9144 19.4189 17.861C19.4189 20.8076 21.8424 23.1964 24.8321 23.1964Z", stroke: "currentColor", strokeWidth: 2, strokeMiterlimit: 10 })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0" },
                react_1.default.createElement("rect", { width: 22.5806, height: 25, fill: "white", transform: "translate(13.5417 11.4584)" })))))); };
exports.default = ProfileOutline;
//# sourceMappingURL=ProfileOutline.js.map
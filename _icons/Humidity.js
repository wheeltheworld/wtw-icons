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
var Humidity = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 40 40" }, props),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { d: "M20.4999 37.591C18.6654 37.5996 16.8495 37.2156 15.1694 36.4638C12.8786 35.5095 10.9108 33.8935 9.50754 31.8142C8.12599 29.7349 7.38538 27.2815 7.38087 24.7694C7.37829 22.9768 7.73547 21.2027 8.4304 19.5563C11.0121 14.7044 13.9383 10.0518 17.1856 5.63576L17.3237 5.4385L19.8923 1.66249C19.9593 1.56022 20.0495 1.47603 20.1553 1.41714C20.2612 1.35824 20.3794 1.3264 20.4999 1.32434V1.32434C20.6204 1.3264 20.7387 1.35824 20.8445 1.41714C20.9503 1.47603 21.0406 1.56022 21.1075 1.66249L23.8694 5.63576C27.0844 10.063 29.9915 14.7146 32.5694 19.5563C33.2373 21.2014 33.5934 22.9608 33.619 24.7412C33.6145 27.2533 32.8739 29.7067 31.4923 31.786C30.0931 33.8758 28.1248 35.5019 25.8304 36.4638C24.1504 37.2156 22.3344 37.5996 20.4999 37.591V37.591Z", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 })))); };
exports.default = Humidity;
//# sourceMappingURL=Humidity.js.map
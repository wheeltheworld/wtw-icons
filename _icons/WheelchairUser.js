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
var WheelchairUser = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.5", className: "nc-icon-wrapper", transform: "translate(.5 .5)" },
        react_1.default.createElement("circle", { cx: "11", cy: "3", r: "2", strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { cx: "20", cy: "22", r: "1", "data-cap": "butt", "data-color": "color-2" }),
        react_1.default.createElement("path", { strokeLinejoin: "round", d: "M7.763 13.551A4.991 4.991 0 1015 18", "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M20 18v-2a1 1 0 00-1-1h-6.265a2 2 0 01-1.98-1.717L10 8", "data-cap": "butt" }),
        react_1.default.createElement("path", { strokeLinejoin: "round", d: "M14.571 12l-.448-3.141a1 1 0 00-.99-.859H10.1l-.2.019-4.42.881a1 1 0 00-.7.533L3 13" })))); };
exports.default = WheelchairUser;
//# sourceMappingURL=WheelchairUser.js.map
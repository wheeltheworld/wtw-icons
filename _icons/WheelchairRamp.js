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
var WheelchairRamp = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5 0.5)" },
        react_1.default.createElement("circle", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, cx: 9, cy: 2.7, r: 2 }),
        react_1.default.createElement("polyline", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, points: "2,22.3 22,17.7 22,22.3  " }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M6.5,10.6c-1.7,1.4-2,3.9-0.6,5.6s3.9,2,5.6,0.6c0.5-0.4,0.9-0.9,1.2-1.5" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M17,15.7l-0.8-3.1c-0.1-0.5-0.6-0.8-1.1-0.7l-3.2,0.5c-1.1,0.2-2.1-0.5-2.3-1.6L9,7.7h5" })))); };
exports.default = WheelchairRamp;
//# sourceMappingURL=WheelchairRamp.js.map
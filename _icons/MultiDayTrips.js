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
var MultiDayTrips = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { d: "M11,20a6,6,0,0,1-6-6", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M9,5c0,2.209-4,6-4,6S1,7.209,1,5A4,4,0,0,1,9,5Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M23,12c0,3.314-6,9.5-6,9.5s-6-6.186-6-9.5a6,6,0,0,1,12,0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { cx: 5, cy: 5, r: 1, fill: "currentColor", "data-cap": "butt", "data-stroke": "none", strokeLinecap: "round" }),
        react_1.default.createElement("circle", { cx: 17, cy: 12, r: 2, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, strokeLinejoin: "round" })))); };
exports.default = MultiDayTrips;
//# sourceMappingURL=MultiDayTrips.js.map
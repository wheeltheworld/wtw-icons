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
var ThingsToDo = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("circle", { cx: 13, cy: 3, r: 2, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M15.781,14,14.392,9.372A1.892,1.892,0,0,0,12.573,8h0a1.9,1.9,0,0,0-1.05.318L9,10H4", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, "data-cap": "butt" }),
        react_1.default.createElement("path", { d: "M6,19H4s-3-1-3-5H6l7,8", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" }),
        react_1.default.createElement("path", { d: "M15,19h5s3-1,3-5H10", fill: "none", strokeMiterlimit: 10, "data-color": "color-2" })))); };
exports.default = ThingsToDo;
//# sourceMappingURL=ThingsToDo.js.map
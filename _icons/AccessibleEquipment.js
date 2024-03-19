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
var AccessibleEquipment = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("path", { "data-cap": "butt", d: "M12.47,12H18a2,2,0,0,1,2,2v4", fill: "none", stroke: "currentColor", strokeMiterlimit: "10" }),
        react_1.default.createElement("line", { "data-cap": "butt", x1: "6", y1: "6", x2: "17", y2: "6", fill: "none", stroke: "currentColor", strokeMiterlimit: "10" }),
        react_1.default.createElement("polyline", { "data-cap": "butt", points: "6.823 10.117 5 1 2 1", fill: "none", stroke: "currentColor", strokeMiterlimit: "10" }),
        react_1.default.createElement("circle", { cx: "8", cy: "16", r: "6", fill: "none", strokeMiterlimit: "10" }),
        react_1.default.createElement("circle", { cx: "8", cy: "16", r: "2", fill: "none", strokeMiterlimit: "10" }),
        react_1.default.createElement("circle", { cx: "20", cy: "20", r: "2", fill: "none", strokeMiterlimit: "10" })))); };
exports.default = AccessibleEquipment;
//# sourceMappingURL=AccessibleEquipment.js.map
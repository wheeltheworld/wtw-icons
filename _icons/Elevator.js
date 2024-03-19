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
var Elevator = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("polygon", { points: "18 10 24 10 21 6 18 10", "data-cap": "butt", "data-color": "color-2", "data-stroke": "none", stroke: "none" }),
        react_1.default.createElement("polygon", { points: "18 14 24 14 21 18 18 14", "data-cap": "butt", "data-color": "color-2", "data-stroke": "none", stroke: "none" }),
        react_1.default.createElement("rect", { x: 1, y: 1, width: 7, height: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("rect", { x: 8, y: 1, width: 7, height: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 })))); };
exports.default = Elevator;
//# sourceMappingURL=Elevator.js.map
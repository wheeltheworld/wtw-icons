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
var Crib = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 7, y1: 5, x2: 7, y2: 16, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 12, y1: 5, x2: 12, y2: 16, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 17, y1: 5, x2: 17, y2: 16, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 2, y1: 16, x2: 22, y2: 16, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { "data-cap": "butt", "data-color": "color-2", x1: 2, y1: 5, x2: 22, y2: 5, fill: "none", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 5, y1: 20, x2: 5, y2: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("line", { x1: 19, y1: 20, x2: 19, y2: 22, fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }),
        react_1.default.createElement("path", { d: "M2,2V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V2", fill: "none", stroke: "currentColor", strokeMiterlimit: 10 })))); };
exports.default = Crib;
//# sourceMappingURL=Crib.js.map
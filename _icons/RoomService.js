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
var RoomService = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { d: "M13.476,16H19c2.817,0,3,2,3,2L10.235,22.525a3,3,0,0,1-2.419-.117L1,19V12H2c1.105,0,3.906.438,5,2h3a4,4,0,0,1,4,4H7", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", strokeLinecap: "round" }),
        react_1.default.createElement("path", { d: "M3.825,9.231A9,9,0,0,1,21,13", fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 1.5, "data-cap": "butt", "data-color": "color-2", strokeLinecap: "round" }),
        react_1.default.createElement("line", { x1: 15, y1: 13, x2: 23, y2: 13, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" }),
        react_1.default.createElement("line", { x1: 12, y1: 1, x2: 12, y2: 4, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 1.5, "data-color": "color-2", strokeLinejoin: "round" })))); };
exports.default = RoomService;
//# sourceMappingURL=RoomService.js.map
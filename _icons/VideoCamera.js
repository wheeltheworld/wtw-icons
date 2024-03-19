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
var VideoCamera = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" },
        react_1.default.createElement("rect", { x: "1", y: "7", fill: "none", stroke: "currentColor", strokeMiterlimit: "10", width: "15", height: "14" }),
        react_1.default.createElement("polygon", { fill: "none", stroke: "currentColor", strokeMiterlimit: "10", points: "23,19 16,16 16,12 23,9 " }),
        react_1.default.createElement("polyline", { "data-color": "color-2", fill: "none", strokeMiterlimit: "10", points: " 16,4 16,2 8,2 " }),
        react_1.default.createElement("circle", { "data-stroke": "none", fill: "currentColor", cx: "5", cy: "11", r: "1", strokeLinejoin: "miter", strokeLinecap: "square", stroke: "none" })))); };
exports.default = VideoCamera;
//# sourceMappingURL=VideoCamera.js.map
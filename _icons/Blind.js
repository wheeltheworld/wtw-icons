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
var Blind = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { strokeLinecap: "round", strokeWidth: "1.5", fill: "none", stroke: "currentColor", strokeLinejoin: "round" },
        react_1.default.createElement("circle", { cx: "10", cy: "3", r: "2", "data-cap": "butt" }),
        react_1.default.createElement("line", { x1: "19", y1: "16", x2: "21", y2: "21", stroke: "currentColor" }),
        react_1.default.createElement("path", { d: "M14,22l-.925-4.625a1,1,0,0,0-.381-.6L9.8,14.6A2,2,0,0,1,9,13V8.029" }),
        react_1.default.createElement("path", { d: "M4,13l.869-2.607a1,1,0,0,1,.5-.578L8.789,8.106A.993.993,0,0,1,9.236,8H11.47a1,1,0,0,1,.828.439l1.7,2.5a.991.991,0,0,0,.28.275L17,13" }),
        react_1.default.createElement("line", { x1: "8", y1: "17", x2: "6", y2: "21" })))); };
exports.default = Blind;
//# sourceMappingURL=Blind.js.map
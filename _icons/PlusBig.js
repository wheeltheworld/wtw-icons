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
var PlusBig = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 20 24" }, props),
    react_1.default.createElement("svg", { width: "20", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("g", { "clip-path": "url(#clip0_5552_46684)" },
            react_1.default.createElement("path", { d: "M12 7V17", stroke: "#232323", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1.default.createElement("path", { d: "M17 12H6.99997", stroke: "#232323", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            react_1.default.createElement("path", { d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z", stroke: "#232323", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0_5552_46684" },
                react_1.default.createElement("rect", { width: "24", height: "24", fill: "white" })))))); };
exports.default = PlusBig;
//# sourceMappingURL=PlusBig.js.map
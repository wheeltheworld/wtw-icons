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
var TransportationColor = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("path", { fill: "currentColor", d: "M1 13H23V20H1z" }),
    react_1.default.createElement("path", { fill: props.fill, d: "M3 20H8V23H3z" }),
    react_1.default.createElement("path", { fill: props.fill, d: "M16 20H21V23H16z" }),
    react_1.default.createElement("g", { fill: "none", stroke: "#232323", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5", clipPath: "url(#clip0_856_21777)" },
        react_1.default.createElement("path", { d: "M23 13.1H1M7.6 19.7V23H3.2v-3.3M20.8 19.7V23h-4.4v-3.3" }),
        react_1.default.createElement("path", { d: "M23 3.2v16.5H1V3.2A2.2 2.2 0 013.2 1h17.6A2.2 2.2 0 0123 3.2zM8.7 4.3h6.6M5.4 16.4h2.2M16.4 16.4h2.2" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_856_21777" },
            react_1.default.createElement("path", { fill: "#fff", d: "M0 0H24V24H0z" }))))); };
exports.default = TransportationColor;
//# sourceMappingURL=TransportationColor.js.map
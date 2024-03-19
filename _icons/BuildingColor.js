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
var BuildingColor = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props, { fill: "none" }),
    react_1.default.createElement("path", { fill: "currentColor", d: "M0 14H4V23H0z" }),
    react_1.default.createElement("path", { fill: props.fill, d: "M19 14H23V23H19z" }),
    react_1.default.createElement("g", { stroke: "#232323", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5", clipPath: "url(#clip0_856_21772)" },
        react_1.default.createElement("path", { d: "M4.745 23.4H.6v-9.327h4.145M19.255 23.4H23.4v-9.327h-4.145M19.255.6H4.745v22.8h14.51V.6zM8.89 4.745h1.037M14.073 4.745h1.036M8.89 8.89h1.037M14.073 8.89h1.036M8.89 13.036h1.037M14.073 13.036h1.036M8.89 17.182h1.037M14.073 17.182h1.036M12 23.4v-2.073" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_856_21772" },
            react_1.default.createElement("path", { fill: "#fff", d: "M0 0H24V24H0z" }))))); };
exports.default = BuildingColor;
//# sourceMappingURL=BuildingColor.js.map
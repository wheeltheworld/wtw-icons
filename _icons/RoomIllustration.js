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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../components/Icon"));
var RoomIllustration = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 85 48", fill: "none", width: "85", height: "48" }, props),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M46 44V28a4 4 0 00-4-4H6a4 4 0 00-4 4v15M2 37.999L46 38M42 19V5H6v14" }),
        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M13 19v-5h11v5M24 19v-5h11v5M2 32h44" }),
        react_1.default.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", clipPath: "url(#clip0_126_7205)" },
            react_1.default.createElement("path", { d: "M75.912 26.133h-23.11v14.223h23.11V26.133zM67.912 12.622h-7.11l-2.134 7.111h11.378l-2.134-7.11zM64.357 19.733v2.844" }),
            react_1.default.createElement("path", { d: "M55.823 40.355v3.556h2.133l.711-3.556M73.246 40.355v3.556h-2.133l-.712-3.556M52.801 33.244h23.111M62.401 36.8h4.267M62.401 29.689h4.267" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0_126_7205" },
                react_1.default.createElement("path", { fill: "#fff", d: "M0 0H34.133V34.133H0z", transform: "translate(50.134 11.2)" })))));
};
exports.default = RoomIllustration;
//# sourceMappingURL=RoomIllustration.js.map
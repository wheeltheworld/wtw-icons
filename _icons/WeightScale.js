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
var WeightScale = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", className: "nc-icon-wrapper" },
        react_1.default.createElement("rect", { width: "20", height: "20", x: "2", y: "2", rx: "2", ry: "2" }),
        react_1.default.createElement("path", { d: "M12 12L13 8", "data-cap": "butt" }),
        react_1.default.createElement("path", { d: "M12 5a6.957 6.957 0 00-7 7h14a6.957 6.957 0 00-7-7z" })))); };
exports.default = WeightScale;
//# sourceMappingURL=WeightScale.js.map
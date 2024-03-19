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
var MeasuringTape = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5", clipPath: "url(#clip0)", fill: "none" },
        react_1.default.createElement("path", { strokeLinecap: "round", d: "M23 15.874v5.34H3.266C2.023 21.215 1 20.116 1 18.78v-4.712C1 10.141 3.924 7 7.578 7c3.654 0 6.578 3.22 6.578 7.147l-.073 6.91" }),
        react_1.default.createElement("path", { d: "M14.156 18.073H23M7.505 17.602c1.776 0 3.216-1.547 3.216-3.455 0-1.909-1.44-3.456-3.216-3.456-1.776 0-3.216 1.547-3.216 3.456 0 1.908 1.44 3.455 3.216 3.455z" }),
        react_1.default.createElement("path", { strokeLinecap: "round", d: "M20.515 19.094v-.864M18.468 19.094v-.864M16.276 19.094v-.864" })))); };
exports.default = MeasuringTape;
//# sourceMappingURL=MeasuringTape.js.map
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
var Person = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, d: "M21.5,23.2v-2.8c0-2.6-2.1-4.7-4.7-4.7H7.2c-2.6,0-4.7,2.1-4.7,4.7v2.8" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M12,11.4c2.8,0,5.1-2.3,5.1-5.1S14.8,1.2,12,1.2c-2.8,0-5.1,2.3-5.1,5.1S9.2,11.4,12,11.4z" })))); };
exports.default = Person;
//# sourceMappingURL=Person.js.map
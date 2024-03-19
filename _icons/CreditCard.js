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
var CreditCard = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 22 22" }),
    react_1.default.createElement("g", { clipPath: "url(#clip0_9314_36087)" },
        react_1.default.createElement("g", { stroke: "currentColor", strokeMiterlimit: "10", strokeWidth: "1.5", clipPath: "url(#clip1_9314_36087)" },
            react_1.default.createElement("path", { d: "M1 6.975v10.598c0 .488.367.975.98.975h16.04c.49 0 .98-.366.98-.975V6.975A.963.963 0 0018.02 6H1.98c-.613 0-.98.365-.98.975z" }),
            react_1.default.createElement("path", { strokeLinecap: "round", d: "M1 8.923h17.878M3.45 13.918h4.285M14.96 15.99c.811 0 1.469-.655 1.469-1.462 0-.808-.658-1.462-1.47-1.462-.81 0-1.469.654-1.469 1.462 0 .807.658 1.462 1.47 1.462zM3.45 15.624h2.816M1 10.751h17.878" }))),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "clip0_9314_36087" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H22V22H0z" })),
        react_1.default.createElement("clipPath", { id: "clip1_9314_36087" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M0 0H20V20H0z" }))))); };
exports.default = CreditCard;
//# sourceMappingURL=CreditCard.js.map
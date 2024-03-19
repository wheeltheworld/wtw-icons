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
var OnSale = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? 'currentColor' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["fill", "stroke"]);
    return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 26 24" }, props, { fill: "none" }),
        react_1.default.createElement("g", { id: "Group 27" },
            react_1.default.createElement("g", { id: "Group 26" },
                react_1.default.createElement("path", { id: "Vector", d: "M15.9147 8.07373L11.4771 15.7599", stroke: stroke, "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                react_1.default.createElement("path", { id: "Vector_2", d: "M16.9644 10.3047C16.4046 9.32926 13.9622 7.43238 12.9894 9.11729C11.8249 11.1343 15.6052 12.3675 14.5775 14.1474C13.5499 15.9272 11.4376 14.5291 10.2551 13.0756", stroke: stroke, "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })),
            react_1.default.createElement("path", { id: "Rectangle 77", d: "M10.9507 3.08102L11.1616 3.80075L10.9507 3.08102L3.65409 5.21916C3.01327 5.40694 2.63321 6.06523 2.791 6.71408L4.58763 14.1022L5.31639 13.925L4.58763 14.1022C4.66835 14.4342 4.88139 14.7186 5.17723 14.8894L17.7855 22.1688C18.3834 22.514 19.1479 22.3091 19.493 21.7112L24.993 12.185C25.3382 11.5871 25.1334 10.8226 24.5355 10.4774L11.9272 3.19805C11.6314 3.02724 11.2785 2.98496 10.9507 3.08102Z", stroke: stroke, "stroke-width": "1.5" }),
            react_1.default.createElement("ellipse", { id: "Ellipse 1", cx: "6.47946", cy: "7.75101", rx: "0.7", ry: "0.7396", transform: "rotate(30 6.47946 7.75101)", stroke: stroke }))));
};
exports.default = OnSale;
//# sourceMappingURL=OnSale.js.map
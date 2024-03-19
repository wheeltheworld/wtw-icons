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
var MeetingRoom = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("ellipse", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, cx: 3.5, cy: 3.8, rx: 1.7, ry: 1.7 }),
        react_1.default.createElement("ellipse", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, cx: 12, cy: 3.8, rx: 1.7, ry: 1.7 }),
        react_1.default.createElement("ellipse", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, cx: 20.5, cy: 3.8, rx: 1.7, ry: 1.7 }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10, d: "M16.9,23.1v-4.7c0-1.3,1.1-2.4,2.4-2.4h2.4c0,0,0,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.5-0.4,0.5-0.7 l0-2.4V9.4c0-1-0.8-1.8-1.8-1.8h0c-1.3,0-1.7,0.9-2,1.8c-0.1,0.3-0.6,1.6-0.7,2h-2.8V9.6c0-1.1-0.9-2.1-2.1-2.1H11 c-1.1,0-2.1,0.9-2.1,2.1v1.8H6.1c-0.1-0.4-0.6-1.7-0.7-2c-0.3-0.9-0.8-1.8-2-1.8h0c-1,0-1.8,0.8-1.8,1.8v3.3l0,2.4 c0,0.3,0.2,0.6,0.5,0.7c0.1,0,0.2,0,0.3,0.1c0,0,0,0,0.1,0h2.4C6,16,7.1,17,7.1,18.4v4.7" })))); };
exports.default = MeetingRoom;
//# sourceMappingURL=MeetingRoom.js.map
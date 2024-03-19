"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@svgr/core"));
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var SVGfolder = '../../src/svgs/';
var toPascalCase = function (input) {
    return ("" + input)
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w+)/, 'g'), function (_$1, $2, $3) { return "" + ($2.toUpperCase() + $3.toLowerCase()); })
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), function (s) { return s.toUpperCase(); });
};
var removeAttributes = function (attr, str) {
    return str.replace(new RegExp("\\s(" + attr.join('|') + ")=(\"|{)[^\\s\"]*(\"|})\\s", 'g'), ' ');
};
var svgs = fs_1.default.readdirSync(path_1.default.join(__dirname, SVGfolder)).map(function (svg) { return ({
    file: svg,
    name: toPascalCase(svg.replace(/\.svg/, '').split('.')[0]),
    preserveColor: svg.includes('preserveColor'),
}); });
var normalizeColors = function (input) {
    return input.replace(/"#[\da-fA-F]{6}"/g, '"currentColor"').replace(/"%(#[\da-fA-F]{6})%"/g, '"$1"');
};
var template = function (name, content, opts) {
    return "import React from 'react';\n    import Icon from '../components/Icon';\n    import { IconComponent } from '../types';\n    \n    const " + name + ": IconComponent = (props) => (\n        <Icon viewBox=\"" + opts.viewBox + "\" fill=\"" + (opts.fill || '') + "\" {...props}>\n            " + content + "\n        </Icon>\n    );\n    \n    export default " + name + ";\n    ";
};
var generateTsx = function (svg) { return __awaiter(void 0, void 0, void 0, function () {
    var file, $, node, viewBox, fill, res, jsx, tsx;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                file = fs_1.default.readFileSync(path_1.default.join(__dirname, SVGfolder, svg.file), { encoding: 'utf-8' });
                $ = cheerio_1.default.load(file || '');
                node = $('svg');
                viewBox = node.attr().viewBox;
                fill = node.attr().fill;
                node.each(function () {
                    $(this).find('title').remove();
                    if ($(this).find('style').length) {
                        console.warn("There seems to be an style tag in " + svg.file + ", this might end up with a mistaken parse of the svg, make sure the elements that use thos styles have the styles themselves");
                    }
                    $(this).find('style').remove();
                });
                return [4, (0, core_1.default)(node.html(), { icon: true, plugins: ['@svgr/plugin-jsx'] }, { componentName: svg.name })];
            case 1:
                res = (_a = (_b.sent()).match(/return ((.)+;)?/)) === null || _a === void 0 ? void 0 : _a[0];
                jsx = normalizeColors(removeAttributes(['className'], (res === null || res === void 0 ? void 0 : res.replace(/(return |;)/g, '')) || ''));
                tsx = template(svg.name, jsx, { viewBox: viewBox, fill: fill });
                return [2, tsx];
        }
    });
}); };
var _loop_1 = function (svg) {
    generateTsx(svg).then(function (tsx) {
        fs_1.default.writeFileSync(path_1.default.join(__dirname, SVGfolder, "../react/_icons/" + svg.name + ".tsx"), tsx);
    });
};
for (var _i = 0, svgs_1 = svgs; _i < svgs_1.length; _i++) {
    var svg = svgs_1[_i];
    _loop_1(svg);
}
var icons = fs_1.default.readdirSync(path_1.default.join(__dirname, '../../src/react/_icons/')).map(function (file) { return file.replace(/\.tsx?/, ''); });
var missing = [];
for (var _a = 0, icons_1 = icons; _a < icons_1.length; _a++) {
    var icon = icons_1[_a];
    if (!svgs.map(function (i) { return i.name; }).includes(icon)) {
        missing.push(icon);
    }
}
console.log(missing);
//# sourceMappingURL=genIcons.js.map
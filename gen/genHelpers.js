"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var icons = fs_1.default.readdirSync(path_1.default.join(__dirname, '../../src/react/_icons/')).map(function (file) { return file.replace(/\.tsx?/, ''); });
var iconsTS = icons.map(function (icon) { return "export { default as " + icon + "Icon } from  './_icons/" + icon + "';"; }).join('\n');
fs_1.default.writeFile(path_1.default.join(__dirname, '../../src/react/icons.ts'), iconsTS, function () {
    return console.log('icons.ts generated correctly');
});
var helpersTS = icons.map(function (icon) { return "import " + icon + " from  './_icons/" + icon + "';"; }).join('\n') + "\n\nimport { IconTag } from './types'\n\nexport const iconsArray = [\n" + icons.map(function (icon) { return "\t'" + icon.toLowerCase() + "',"; }).join('\n') + "\n] as const;\n\nexport const iconsObject = {\n" + icons.map(function (icon) { return "\t" + icon.toLowerCase() + ": " + icon + ","; }).join('\n') + "\n} as const;\n\nexport function isValidIcon(possibleIcon: any): possibleIcon is IconTag {\n    return possibleIcon && typeof possibleIcon === 'string' && possibleIcon in iconsObject;\n}\n";
fs_1.default.writeFile(path_1.default.join(__dirname, '../../src/react/helpers.ts'), helpersTS, function () {
    return console.log('helpers.ts generated correctly');
});
//# sourceMappingURL=genHelpers.js.map
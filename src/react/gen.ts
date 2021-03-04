import fs from 'fs';
import path from 'path';

const getIcons = () =>
    fs.readdirSync(path.join(__dirname, '../src/react/icons/')).map((file) => file.replace(/\.tsx?/, ''));

const icons = getIcons();

const imports = icons.map((icon) => `import ${icon} from  './icons/${icon}';`).join('\n')

const object = icons.map((icon) => `\t${icon.toLowerCase()}: ${icon},`).join('\n')

const array = icons.map((icon) => `\t'${icon.toLowerCase()}',`).join('\n')

let file = 
`${imports}

const icons = {
${object}
};

const IconList = [
${array}
]

export type TIconList = keyof typeof icons

export function isValidIcon(possibleIcon: any): possibleIcon is TIconList {
\treturn possibleIcon && typeof possibleIcon === 'string' && IconList.includes(possibleIcon);
}

export default icons; 
`;

fs.writeFile(path.join(__dirname, '../src/react/icons.ts'), file, () => console.log('Icons generated correctly'));

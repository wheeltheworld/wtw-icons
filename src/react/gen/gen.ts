import fs from 'fs';
import path from 'path';

const icons = fs.readdirSync(path.join(__dirname, '../../src/react/ICONS/')).map((file) => file.replace(/\.tsx?/, ''));

const iconsTS = icons.map((icon) => `export { default as ${icon}Icon } from  './ICONS/${icon}';`).join('\n');

fs.writeFile(path.join(__dirname, '../../src/react/icons.ts'), iconsTS, () =>
    console.log('icons.ts generated correctly'),
);

const helpersTS = `${icons.map((icon) => `import ${icon} from  './ICONS/${icon}';`).join('\n')}

export const iconsArray = [${icons.map((icon) => `\t'${icon.toLowerCase()}',`).join('\n')}] as const

export const iconsObject = {${icons.map((icon) => `\t${icon.toLowerCase()}: ${icon},`).join('\n')}} as const
`;

fs.writeFile(path.join(__dirname, '../../src/react/helpers.ts'), helpersTS, () =>
    console.log('helpers.ts generated correctly'),
);

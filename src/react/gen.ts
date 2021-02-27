import fs from 'fs';
import path from 'path';

const getIcons = () =>
    fs.readdirSync(path.join(__dirname, '../src/react/icons/')).map((file) => file.replace(/\.tsx?/, ''));

const icons = getIcons();

const imports = icons.map((icon) => `import ${icon} from  './icons/${icon}';`).join('\n')

const object = icons.map((icon) => `   ${icon.toLowerCase()}: ${icon},`).join('\n')

let file = 
`${imports}

const icons = {
${object}
};

export default icons; 
`;

fs.writeFile(path.join(__dirname, '../src/react/icons.ts'), file, () => console.log('Icons generated correctly'));

import svgr from '@svgr/core';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const SVGfolder = '../../src/svgs/';

const toPascalCase = (input: string) => {
    return `${input}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w+)/, 'g'), (_$1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

const removeAttributes = (attr: string[], str: string) =>
    str.replace(new RegExp(`\\s(${attr.join('|')})=("|\{)[^\\s"]*("|\})\\s`, 'g'), ' ');

const svgs = fs.readdirSync(path.join(__dirname, SVGfolder)).map((svg) => ({
    file: svg,
    name: toPascalCase(svg.replace(/\.svg/, '').split('.')[0]),
    preserveColor: svg.includes('preserveColor'),
}));

const normalizeColors = (input: string) =>
    input.replace(/"#[\da-fA-F]{6}"/g, '"currentColor"').replace(/"%(#[\da-fA-F]{6})%"/g, '"$1"');

const template = (name: string, content: string, opts: { viewBox: string; fill: string }) => {
    return `import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const ${name}: IconComponent = (props) => (
        <Icon viewBox="${opts.viewBox}" fill="${opts.fill || ''}" {...props}>
            ${content}
        </Icon>
    );
    
    export default ${name};
    `;
};

const generateTsx = async (svg: typeof svgs[number]) => {
    const file = fs.readFileSync(path.join(__dirname, SVGfolder, svg.file), { encoding: 'utf-8' });

    const $ = cheerio.load(file || '');

    const node = $('svg');
    const viewBox = node.attr().viewBox;
    const fill = node.attr().fill;
    node.each(function () {
        // @ts-ignore
        $(this).find('title').remove();

        // @ts-ignore
        if ($(this).find('style').length) {
            console.warn(
                `There seems to be an style tag in ${svg.file}, this might end up with a mistaken parse of the svg, make sure the elements that use thos styles have the styles themselves`,
            );
        }
        // @ts-ignore
        $(this).find('style').remove();
    });
    const res = ((await svgr(
        node.html(),
        { icon: true, plugins: ['@svgr/plugin-jsx'] },
        { componentName: svg.name },
    )) as string).match(/return ((.)+;)?/)?.[0];

    const jsx = normalizeColors(removeAttributes(['className'], res?.replace(/(return |;)/g, '') || ''));

    const tsx = template(svg.name, jsx, { viewBox, fill });
    return tsx;
};

for (const svg of svgs) {
    generateTsx(svg).then((tsx) => {
        fs.writeFileSync(path.join(__dirname, SVGfolder, `../react/_icons/${svg.name}.tsx`), tsx);
    });
}

const icons = fs.readdirSync(path.join(__dirname, '../../src/react/_icons/')).map((file) => file.replace(/\.tsx?/, ''));
const missing: string[] = [];
for (const icon of icons) {
    if (!svgs.map((i) => i.name).includes(icon)) {
        missing.push(icon);
    }
}
console.log(missing);

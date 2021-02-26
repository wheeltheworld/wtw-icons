import icons, { Icon } from '../../react/icons';

export const search = (query?: string): Icon[] => {
    if (!query) return Object.keys(icons) as Icon[];

    query = query.toLowerCase();

    const result: Icon[] = [];

    (Object.keys(icons) as Icon[]).forEach((icon) => {
        if (icon.includes(query!)) result.push(icon);
    });

    (Object.keys(icons) as Icon[]).forEach((icon) => {
        if (icon.includes(query!.split(' ').join('')) && !result.includes(icon)) result.push(icon);
    });

    return result;
};

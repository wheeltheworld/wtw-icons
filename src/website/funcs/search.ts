import { iconsArray } from '../../react/helpers';
import { IconTag } from '../../react';

export const search = (query?: string): IconTag[] => {
    if (!query) return [...iconsArray];

    query = query.toLowerCase();

    const result: IconTag[] = [];

    iconsArray.forEach((icon) => {
        if (icon.includes(query!)) result.push(icon);
    });

    iconsArray.forEach((icon) => {
        if (icon.includes(query!.split(' ').join('')) && !result.includes(icon)) result.push(icon);
    });

    return result;
};

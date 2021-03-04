import icons from '../../react/icons';
import { TIconList } from '../../react';

export const search = (query?: string): TIconList[] => {
    if (!query) return Object.keys(icons) as TIconList[];

    query = query.toLowerCase();

    const result: TIconList[] = [];

    (Object.keys(icons) as TIconList[]).forEach((icon) => {
        if (icon.includes(query!)) result.push(icon);
    });

    (Object.keys(icons) as TIconList[]).forEach((icon) => {
        if (icon.includes(query!.split(' ').join('')) && !result.includes(icon)) result.push(icon);
    });

    return result;
};

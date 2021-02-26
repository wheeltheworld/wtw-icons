import { SVGProps } from 'react';

export type IconComponent<T = {}> = React.FC<SVGProps<SVGSVGElement> & T>;

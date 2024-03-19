import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Halloween1: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 25 25" {...props}>
        <path
        fill={fill}
        fillRule="evenodd"
        d="M4.617 4.562a.75.75 0 10-.475 1.422l3.613 1.208 1.6 2.493L7.183 7.82l-3.94.532a.75.75 0 10.2 1.486l3.274-.441 2.956 2.537a6.118 6.118 0 00-.054.543L6.244 10.35l-3.238 2.336a.75.75 0 10.878 1.216L6.3 12.16l2.983 1.88H6.709L2.997 18.6a.75.75 0 101.163.947l3.262-4.006h2.853c.548.975 1.386 1.599 2.324 1.599.94 0 1.777-.624 2.325-1.6h2.854l3.262 4.007a.75.75 0 001.163-.948l-3.712-4.558h-2.525l2.936-1.879 2.414 1.741a.75.75 0 10.878-1.216l-3.241-2.338-3.37 2.156a6.116 6.116 0 00-.056-.57l2.957-2.537 3.274.441a.75.75 0 10.2-1.486l-3.94-.532-2.174 1.865 1.6-2.493 3.614-1.208a.75.75 0 10-.475-1.422l-4.115 1.375-2.153 3.354c-.486-.492-1.077-.78-1.716-.78-.638 0-1.229.288-1.715.78L8.732 5.936 4.617 4.562zm9.473 8.263c0 .924-.262 1.696-.608 2.196-.35.505-.687.618-.883.618-.195 0-.531-.113-.882-.618-.346-.5-.609-1.272-.609-2.196 0-.924.263-1.696.61-2.196.35-.505.686-.618.881-.618.196 0 .532.113.883.618.346.5.608 1.272.608 2.196z"
        clipRule="evenodd"
      ></path>
    </Icon>
);

export default Halloween1;

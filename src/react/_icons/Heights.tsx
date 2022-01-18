import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Heights: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
    <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M16.844 8.062l-1.437-1.007a.377.377 0 01-.168-.192l-.41-2.799a.307.307 0 00-.194-.254.323.323 0 00-.32.044l-3.257 2.46a.7.7 0 00-.283.49.682.682 0 00.18.535l2.25 2.46c.132.145.228.317.28.504l.82 2.964"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.014 13.194l1.465-2.745c.059-.13.093-.27.103-.411l.196-3.175M6 13.33h10.396a.827.827 0 01.584.234.795.795 0 01.238.572V23M17.385 4.037a1.57 1.57 0 01-.85-.274 1.524 1.524 0 01-.554-.689 1.491 1.491 0 01.36-1.642 1.578 1.578 0 011.684-.313c.28.116.52.31.688.56a1.497 1.497 0 01-.208 1.926 1.552 1.552 0 01-1.12.432v0z"
      ></path>
    </Icon>
);

export default Heights;

import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Noise: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
       <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M1.358 11.412h4.897v6.823H1.358a.358.358 0 01-.358-.31V11.77a.358.358 0 01.358-.358v0z"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12.566 7.153V22.64a.35.35 0 01-.57.28l-5.75-4.432v-7.288l5.75-4.336a.358.358 0 01.57.29v0z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.344 7.608l1.287 2.178a.204.204 0 00.348 0l1.346-1.936a.214.214 0 01.348 0l1.2 1.868a.204.204 0 00.349 0l1.248-1.936a.203.203 0 01.349 0l1.432 2.159M15.344 13.502l1.287 2.178a.204.204 0 00.348 0l1.346-1.936a.215.215 0 01.272-.066c.03.015.056.038.076.066l1.2 1.868a.204.204 0 00.349 0l1.248-1.936a.203.203 0 01.349 0l1.432 2.159M15.344 18.864l1.287 2.178a.203.203 0 00.348 0l1.346-1.936a.214.214 0 01.348 0l1.2 1.849a.203.203 0 00.349 0l1.248-1.936a.203.203 0 01.339 0l1.432 2.158"
      ></path>
    </Icon>
);

export default Noise;

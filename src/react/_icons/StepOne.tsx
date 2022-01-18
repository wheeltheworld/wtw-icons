import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const StepOne: IconComponent = (props) => (
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
        d="M1 23h22M19.338 22.753v-9.69M3.874 22.753v-9.69M2.267 5.562l9.1-2.27M20.605 5.562l-9.092-2.27M19.338 13.96H4.288M11.408 15.778v5.347M9.914 17.061l1.493-1.275M12.747 21.141h-2.68M19.338 10.279V8.955M3.874 10.279V8.955M19.338 7.063V5.738M3.874 7.063V5.738"
      ></path>
    </Icon>
);

export default StepOne;

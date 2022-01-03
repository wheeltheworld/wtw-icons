import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const CreditCard: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
    >
      <g clipPath="url(#clip0_9314_36087)">
        <g
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          clipPath="url(#clip1_9314_36087)"
        >
          <path d="M1 6.975v10.598c0 .488.367.975.98.975h16.04c.49 0 .98-.366.98-.975V6.975A.963.963 0 0018.02 6H1.98c-.613 0-.98.365-.98.975z"></path>
          <path
            strokeLinecap="round"
            d="M1 8.923h17.878M3.45 13.918h4.285M14.96 15.99c.811 0 1.469-.655 1.469-1.462 0-.808-.658-1.462-1.47-1.462-.81 0-1.469.654-1.469 1.462 0 .807.658 1.462 1.47 1.462zM3.45 15.624h2.816M1 10.751h17.878"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_9314_36087">
          <path fill="currentColor" d="M0 0H22V22H0z"></path>
        </clipPath>
        <clipPath id="clip1_9314_36087">
          <path fill="currentColor" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default CreditCard;

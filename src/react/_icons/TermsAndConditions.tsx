import React from 'react'
import Icon from '../components/Icon';
import { IconComponent } from '../types'

const TermsAndConditions: IconComponent = (props) => {
    return (
        <Icon fill="none" viewBox="0 0 20 28" {...props}>
            <g>
                <path
                    stroke="#232323"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M1.421 2h13.395c.105 0 .237.05.316.126l3.763 3.89a.367.367 0 01.105.277v19.305a.406.406 0 01-.421.402H1.42A.406.406 0 011 25.598V2.402C1 2.176 1.184 2 1.421 2z"
                ></path>
                <path
                    stroke="#232323"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M14.345 2.975v3.69c0 .251.21.452.5.452l3.526.025M4.184 11.013h6.448M4.08 14.522h11.605M4.08 18.575h11.605"
                ></path>
            </g>
        </Icon>
    )
}

export default TermsAndConditions;

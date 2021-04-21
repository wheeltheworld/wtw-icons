import React from "react";
import Icon from "../components/Icon";
import { IconComponent } from "../types";

const Lock: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={1.5} >
        <rect width="4.31" height="8.56" x="17.85" y="21.39" rx="1.79"></rect>
        <rect
          width="33.11"
          height="25.93"
          x="3.44"
          y="12.89"
          className="cls-1"
          rx="2.64"
        ></rect>
        <path
          d="M20 .88A11.09 11.09 0 0131.09 12v.93H8.91V12A11.09 11.09 0 0120 .88z"
          className="cls-1"
        ></path>
      </g>
    </Icon>
  );

export default Lock;

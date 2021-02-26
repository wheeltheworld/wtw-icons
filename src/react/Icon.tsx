import React from 'react';
import { IconComponent } from './types';

const Icon: IconComponent = ({ children, ...props }) => {
  return <svg {...props}>{children}</svg>;
};

export default Icon;

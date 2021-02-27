import React, { SVGProps } from 'react'
import icons, { Icon } from './icons'

export interface WTWIconProps extends SVGProps<SVGSVGElement> {
    icon: Icon
}

const WTWIcon: React.FC<WTWIconProps> = ({icon, ...props}) => {
    return React.createElement(icons[icon], props) 
}

export default WTWIcon
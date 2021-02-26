import React, { SVGProps } from 'react'
import icons from './icons'

export interface WTWIconProps extends SVGProps<SVGSVGElement> {
    icon: keyof typeof icons
}

const WTWIcon: React.FC<WTWIconProps> = ({icon, ...props}) => {
    return React.createElement(icons[icon], props) 
}

export default WTWIcon
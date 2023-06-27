import React, { useState, useContext } from 'react';
import { FontColorContext } from '../../App';
const SvgIcon = ({ children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fontColor = useContext(FontColorContext);
  const svgStyle={fill: isHovered ? 'red' : fontColor, transition: 'fill 0.3s' }
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
      style={svgStyle}
    >
      {children}
    </div>
  );
};
export default SvgIcon;
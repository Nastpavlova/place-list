import React, { useState } from "react";
import IconButtonProps from './TIconButton.types';
import styles from './IconButton.module.css';

import Icon from '../Icon';


const IconButton: React.FC <IconButtonProps> = ({
  alt = 'icon button',
  fillIcon,
  outlineIcon,
  onClick
}) => {
  const [isFilled, setIsFilled] = useState(false)

  const currentIcon = isFilled ? fillIcon : outlineIcon;
  
  const toggleIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsFilled(!isFilled),
    onClick?.(event);
  }

  return (
    <button 
      onClick={toggleIcon}
      className={styles.button}
    >
      <Icon 
        src = {currentIcon}
        width={35}
        height={50}
        alt={alt}
      />
    </button>
  )
}

export default IconButton;
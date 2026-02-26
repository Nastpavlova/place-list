import React from 'react';
import clsx from 'clsx';
import styles from './ButtonUI.module.css'

import ButtonUIProps from './TButtonUI.types'

const ButtonUI: React.FC<ButtonUIProps> = (props) => {
  const {
    icon = null,
    children,
    variant = 'primary',
    size = 'large',
    className = '',
    ...restProps
  } = props;


  const buttonClassName = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  )

  return (
    <button 
      type='button'
      className={buttonClassName}
      {...restProps}
    >
      {icon && 
        <div className={styles.button__icon}>{icon}</div>
      }
      <span className={styles.button__text}>
        {children}
      </span>
    </button>
  )
}

export default ButtonUI;
import React from "react";
import IconProps from "./TIcon.types";
import styles from './Icon.module.css';

const Icon: React.FC<IconProps> = ({
    src,
    alt = 'icon',
    width = 50,
    height = 50,
    ...props
}) => {

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    )
}

export default Icon;
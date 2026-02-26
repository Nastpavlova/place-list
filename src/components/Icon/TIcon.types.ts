import { ImgHTMLAttributes } from 'react';

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  src: string;
  width?: number;
  height?: number;
};

export default IconProps;
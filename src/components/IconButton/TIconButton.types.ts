import { ButtonHTMLAttributes } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  alt?: string,
  fillIcon: string,
  outlineIcon: string,
}

export default IconButtonProps;
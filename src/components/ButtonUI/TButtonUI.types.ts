import { ButtonHTMLAttributes, ReactElement } from 'react';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LOGIN: 'login'
} as const;

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export interface ButtonUIProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export default ButtonUIProps;
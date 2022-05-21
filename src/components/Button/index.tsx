import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: JSX.Element
  as?: React.ElementType
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
} & ButtonTypes

export const Button = ({
  children,
  variant = 'primary',
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {icon} {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'variant'> & {
  hasIcon: boolean
}

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral[300]};
  `,

  small: (theme: DefaultTheme) => css`
    padding: 1.6rem 0;
    font-size: ${theme.font.sizes.medium};
    width: 9rem;
  `,
  medium: (theme: DefaultTheme) => css`
    padding: 1.4rem 0;
    font-size: ${theme.font.sizes.medium};
    width: 16.8rem;
  `,
  large: (theme: DefaultTheme) => css`
    padding: 1.6rem 0;
    font-size: ${theme.font.sizes.small};
    width: 18.5rem;
  `,
  fullWidth: (theme: DefaultTheme) => css`
    width: 100%;
    padding: 1.4rem 0;
    font-size: ${theme.font.sizes.medium};
  `,

  withIcon: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 1.6rem 0;
    width: 18.5rem;
    height: 5.5rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: #f6f6f6;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 4px;
    color: #f6f6f6;
    font-weight: 600;
    transition: color ${theme.transition.default};

    &:hover {
      filter: brightness(0.9);
    }

    ${!!variant && wrapperModifiers[variant](theme)};
    ${!!size && wrapperModifiers[size](theme)};
    ${fullWidth && wrapperModifiers.fullWidth(theme)};
    ${hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`

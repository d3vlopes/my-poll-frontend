import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  ${({ theme }) => css`
    align-self: flex-start;
    margin-bottom: 1.6rem;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 4px;
    background-color: transparent;
    width: 100%;
    max-width: 119.2rem;
    padding: 2.4rem;
    border: 1px solid ${theme.colors.neutral[200]};
    color: ${theme.colors.neutral[200]};
    outline: none;

    &:focus-visible {
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.neutral[300]};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    ajustify-content: center;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 3.2rem 0 1.6rem 4rem;
    max-width: 61.2rem;
    margin: 0 auto;
  `}
`

export const Question = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: 700;
    margin-bottom: 1.6rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
    margin-bottom: 2.4rem;
  `}
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 0.8rem;
    font-weight: 600;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 4rem;
  display: flex;
  gap: 2.2rem;
`

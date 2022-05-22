import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 3.2rem 1.6rem 4rem 1.6rem;
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

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`

export const Result = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    padding: 1.2rem 2.4rem 1.2rem;
    margin-bottom: 2.4rem;

    span {
      color: #f6f6f6;
      font-weight: 600;
    }
  `}
`

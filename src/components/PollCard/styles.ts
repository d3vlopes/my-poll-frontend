import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 0;
    width: 100%;
    max-width: 61.2rem;
    border-radius: 8px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all ${theme.transition.default};

    &:hover {
      border: 1px solid ${theme.colors.primary};
    }

    @media (min-width: 1310px) {
      &:hover {
        transform: scale(1.05);
      }
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    margin-bottom: 1.6rem;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: ${theme.font.sizes.medium};
      text-align: center;
    }
  `}
`

export const DateContainer = styled.div`
  display: flex;
  gap: 4.3rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`

export const Date = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
  `}
`

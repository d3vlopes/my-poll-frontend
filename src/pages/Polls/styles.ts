import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: calc(${theme.font.sizes.xlarge} + 1rem);
    margin-bottom: 1.2rem;
    font-weight: 700;

    @media (max-width: 625px) {
      font-size: calc(${theme.font.sizes.large} + 0.4rem);
      line-height: ${theme.font.sizes.xlarge};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
  `}
`

export const PollsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem 4rem;
  margin-top: 4rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 0 50px;
  }
`

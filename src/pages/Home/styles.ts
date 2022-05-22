import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 4rem 3.2rem 6rem 3.2rem;
    width: 100%;
    margin-top: 4rem;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1.6rem;
  }

  button {
    margin-top: calc(2.4rem - 1.6rem);
  }
`

export const Date = styled.div`
  display: flex;
  gap: 3.2rem;

  @media (max-width: 625px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(6rem - 3.2rem);

  button {
    width: 50%;
  }

  @media (max-width: 625px) {
    button {
      width: 100%;
    }
  }
`

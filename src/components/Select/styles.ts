import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media (max-width: 625px) {
      width: 100%;
    }

    select {
      appearance: none;
      border: 1px solid #c9c9c9;
      background: url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1653176385/others/arrow-down_lfvo7o.svg)
          no-repeat right 0.8rem center/2rem,
        linear-gradient(to left, rgba(255, 255, 255), rgba(255, 255, 255));
      border-radius: 8px;
      cursor: pointer;
      font: inherit;
      height: 4.5rem;
      width: 29rem;
      outline: 0;
      padding: 1.2rem 1.2rem 1.2rem 1.6rem;
      color: ${theme.colors.neutral[300]};

      @media (max-width: 625px) {
        width: 100%;
      }

      &:focus {
        outline: none;
        border: 1px solid ${theme.colors.black};
      }

      &::-ms-expand {
        display: none;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 0.8rem;
  `}
`

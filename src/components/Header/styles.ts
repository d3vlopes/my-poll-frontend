import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    padding: 2.4rem 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `}
`

export const Logo = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.logo};
    font-size: 5rem;
    color: ${theme.colors.primary};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    a {
      position: relative;
      font-size: ${theme.font.sizes.medium};
      font-weight: 600;
      color: ${theme.colors.black};
      text-decoration: none;
      transition: color ${theme.transition.ease.default};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`

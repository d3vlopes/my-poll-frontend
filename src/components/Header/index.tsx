import { Link } from 'react-router-dom'

import { Container } from 'components/Container'

import * as S from './styles'

export type HeaderProps = {
  activeLink?: '/' | '/polls' | string
}

export const Header = ({ activeLink }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Link to="/">
          <S.Logo>My Poll</S.Logo>
        </Link>
        <S.Nav>
          <S.Link isActive={activeLink === '/'} to="/">
            Criar enquete
          </S.Link>
          <S.Link isActive={activeLink === '/polls'} to="/polls">
            Enquetes
          </S.Link>
        </S.Nav>
      </Container>
    </S.Wrapper>
  )
}

import { Link } from 'react-router-dom'

import { Container } from 'components/Container'

import * as S from './styles'

export type HeaderProps = {
  title?: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Link to="/">
          <S.Logo>My Poll</S.Logo>
        </Link>
        <S.Nav>
          <Link to="/">Criar enquete</Link>
          <Link to="/polls">Enquetes</Link>
        </S.Nav>
      </Container>
    </S.Wrapper>
  )
}

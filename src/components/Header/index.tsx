import { Container } from 'components/Container'
import { Link } from 'react-router-dom'

import * as S from './styles'

export type HeaderProps = {
  title?: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Logo>My Poll</S.Logo>
        <S.Nav>
          <Link to="/">Criar enquete</Link>
          <Link to="/polls">Enquetes</Link>
        </S.Nav>
      </Container>
    </S.Wrapper>
  )
}

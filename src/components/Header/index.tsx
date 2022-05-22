import { Container } from 'components/Container'

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
          <a href="#">Criar enquete</a>
          <a href="#">Enquetes</a>
        </S.Nav>
      </Container>
    </S.Wrapper>
  )
}

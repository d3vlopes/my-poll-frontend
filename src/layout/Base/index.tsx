import { Header } from 'components/Header'
import { ReactNode } from 'react'
import * as S from './styles'

export type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

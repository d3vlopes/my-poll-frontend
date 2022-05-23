import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from 'components/Header'

import * as S from './styles'

export type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  const path = useLocation()

  return (
    <S.Wrapper>
      <Header activeLink={path.pathname} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

import * as S from './styles'

export type PollCardProps = {
  id?: string
  title: string
  startDate: string
  endDate: string
}

export const PollCard = ({ title, startDate, endDate }: PollCardProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.DateContainer>
        <S.Date>Início:{startDate}</S.Date>
        <S.Date>Término:{endDate}</S.Date>
      </S.DateContainer>
    </S.Wrapper>
  )
}

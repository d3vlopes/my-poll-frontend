import * as S from './styles'

export type PollCardProps = {
  title: string
  startDate: string
  endDate: string
}

export const PollCard = ({ title, startDate, endDate }: PollCardProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.DateContainer>
        <S.Date>{startDate}</S.Date>
        <S.Date>{endDate}</S.Date>
      </S.DateContainer>
    </S.Wrapper>
  )
}

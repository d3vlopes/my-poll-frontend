import { Container } from 'components/Container'
import { PollCard, PollCardProps } from 'components/PollCard'
import { Select } from 'components/Select'
import { Link } from 'react-router-dom'

import * as S from './styles'

export const Polls = () => {
  const polls = [
    {
      id: '14548ad7s8d7s',
      title: 'Qual o melhor framework frontend?',
      startDate: '21/05/2022 - 19:30 hrs',
      endDate: '21/05/2022 - 19:30 hrs',
    },
    {
      id: '14548ad7s8dsddsdsds',
      title: 'Qual o melhor time do sul?',
      startDate: '21/05/2022 - 19:30 hrs',
      endDate: '21/05/2022 - 19:30 hrs',
    },
    {
      id: '14548hjsdhsydejahdsh',
      title: 'Qual o melhor anime da história?',
      startDate: '21/05/2022 - 19:30 hrs',
      endDate: '21/05/2022 - 19:30 hrs',
    },
    {
      id: '14548ad5dsds8d9s8d9w',
      title: 'O que devo fazer amanhã?',
      startDate: '21/05/2022 - 19:30 hrs',
      endDate: '21/05/2022 - 19:30 hrs',
    },
  ] as PollCardProps[]

  const renderPolls = (poll: PollCardProps) => {
    return (
      <Link to={`/polls/${poll.id}`}>
        <PollCard
          key={`poll-${poll.id}`}
          title={poll.title}
          startDate={poll.startDate}
          endDate={poll.endDate}
        />
      </Link>
    )
  }

  return (
    <S.Wrapper>
      <S.Title>Enquetes</S.Title>
      <S.Description>Encontre aqui a sua enquete</S.Description>

      <Container>
        <Select label="Filtrar" />

        <S.PollsContainer>{polls.map(renderPolls)}</S.PollsContainer>
      </Container>
    </S.Wrapper>
  )
}

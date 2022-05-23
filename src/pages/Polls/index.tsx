import { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from 'services/api'

import { formatDate } from 'utils/format'

import { Container } from 'components/Container'
import { PollCard } from 'components/PollCard'
import { Select } from 'components/Select'
import { Button } from 'components/Button'

import * as S from './styles'

interface Poll {
  id: string
  question: string
  status: 'in progress' | 'not start' | 'complete'
  start_date: string
  end_date: string
}

export const Polls = () => {
  const [polls, setPolls] = useState<Poll[]>([])
  const [selectOption, setSelectOption] = useState('')

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectOption(event.currentTarget.value)
  }

  useEffect(() => {
    async function loadPolls() {
      try {
        const { data } = await api.get('/polls')
        setPolls(data)
      } catch (error) {
        console.log(error)
      }
    }

    loadPolls()
  }, [])

  const renderPoll = (poll: Poll) => {
    const formattedStartDate = formatDate(poll.start_date)
    const formattedEndDate = formatDate(poll.end_date)

    return (
      <Link to={`/poll/${poll.id}`} key={poll.id}>
        <PollCard
          title={poll.question}
          startDate={formattedStartDate}
          endDate={formattedEndDate}
        />
      </Link>
    )
  }

  const filteredPolls = selectOption
    ? polls.filter((poll) => poll.status === selectOption)
    : polls

  const renderPolls = () => {
    return (
      <>
        <Select
          label="Filtrar"
          value={selectOption}
          onChange={handleSelectChange}
        />
        <S.PollsContainer>{filteredPolls.map(renderPoll)}</S.PollsContainer>
      </>
    )
  }

  const renderNotPoll = () => {
    return (
      <S.NotPoll>
        Você ainda não não criou nem uma enquete.
        <Link to="/">
          <Button>Criar enquete</Button>
        </Link>
      </S.NotPoll>
    )
  }

  return (
    <S.Wrapper>
      <S.Title>Enquetes</S.Title>
      <S.Description>Encontre aqui a sua enquete</S.Description>

      <Container>
        {polls.length === 0 ? renderNotPoll() : renderPolls()}
      </Container>
    </S.Wrapper>
  )
}

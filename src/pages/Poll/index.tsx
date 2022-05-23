import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import dayjs from 'dayjs'

import { Button } from 'components/Button'
import { Container } from 'components/Container'

import { api } from 'services/api'

import * as S from './styles'

interface PollOption {
  id: string
  poll_id: string
  text: string
  points: number
  poll: {
    id: string
    question: string
    status: string
    start_date: Date
    end_date: Date
  }
}

export const Poll = () => {
  const [pollOptions, setPollOptions] = useState<PollOption[]>([])
  const [selectedOption, setSelectedOption] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pollTitle, setPollTitle] = useState('')
  const [pollEndDate, setPollEndDate] = useState(Date)

  let params = useParams()
  const pollId = params.pollId

  const dateNow = dayjs().toDate()
  const isAfter = compareIfAfter(dateNow, new Date(pollEndDate))

  function compareIfAfter(start_date: Date, end_date: Date) {
    return dayjs(start_date).isAfter(end_date)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.id)
  }

  useEffect(() => {
    async function loadPoll() {
      try {
        setIsLoading(true)

        const { data } = await api.get(`poll/${pollId}`)

        setPollOptions(data)
        setPollTitle(data[0].poll.question)
        setPollEndDate(data[0].poll.end_date)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPoll()
  }, [pollId])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      const poll = pollOptions.filter(
        (poll) => poll.text.toLowerCase() === selectedOption,
      )
      await api.put('vote', {
        id_option: poll[0].id,
      })
      alert('Obrigado por seu voto!')
    } catch (error) {
      console.log(error)
    }
  }

  const renderOptions = (option: PollOption) => {
    return (
      <div key={option.id}>
        <input
          type="radio"
          id={option.text.toLowerCase()}
          name="option"
          value={selectedOption}
          checked={selectedOption === option.text.toLowerCase()}
          onChange={handleChange}
        />
        <label htmlFor={option.text.toLowerCase()}>{option.text}</label>
      </div>
    )
  }

  const renderLoading = () => <div>Loading....</div>

  const renderContent = () => (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Question>{pollTitle}</S.Question>
      <S.Text>Escolha uma resposta</S.Text>

      <S.Options>{pollOptions.map(renderOptions)}</S.Options>

      <S.ButtonsContainer>
        <Button disabled={!selectedOption.length || isAfter} type="submit">
          {isLoading ? 'Enviando...' : 'Votar'}
        </Button>
        <Link to={`/poll/result/${pollId}`}>
          <Button variant="secondary">Resultados</Button>
        </Link>
      </S.ButtonsContainer>
    </S.Wrapper>
  )

  return <Container>{isLoading ? renderLoading() : renderContent()}</Container>
}

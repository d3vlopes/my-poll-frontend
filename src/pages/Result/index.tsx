import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import io from 'socket.io-client'

import { Button } from 'components/Button'

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

export const Result = () => {
  const [pollOptions, setPollOptions] = useState<PollOption[]>([])
  const [pollTitle, setPollTitle] = useState('')

  let params = useParams()
  const pollId = params.pollId

  useEffect(() => {
    const socket = io('http://localhost:3333')

    socket.on('new_vote', (data) => {
      const updateOption = pollOptions.map((option) =>
        option.id === data.id
          ? {
              ...option,
              points: data.points,
            }
          : option,
      )

      setPollOptions(updateOption)
    })
  }, [pollOptions])

  useEffect(() => {
    async function loadPoll() {
      try {
        const { data } = await api.get(`poll/${pollId}`)
        setPollOptions(data)
        setPollTitle(data[0].poll.question)
      } catch (error) {
        console.log(error)
      }
    }

    loadPoll()
  }, [pollId])

  const renderOptionsResult = (option: PollOption) => {
    return (
      <S.Result key={option.id}>
        <span>{option.text}</span> <span>{option.points} votos</span>
      </S.Result>
    )
  }

  return (
    <S.Wrapper>
      <S.Question>{pollTitle}</S.Question>

      <S.Options>{pollOptions.map(renderOptionsResult)}</S.Options>

      <Link to={`/poll/${pollId}`}>
        <Button variant="secondary" size="small">
          Voltar
        </Button>
      </Link>
    </S.Wrapper>
  )
}

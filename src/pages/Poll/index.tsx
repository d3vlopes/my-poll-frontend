import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import * as S from './styles'

export const Poll = () => {
  const [selectedOption, setSelectedOption] = useState('')

  let params = useParams()
  const pollId = params.pollId

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.id)
  }

  function handleVote() {}

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  console.log(selectedOption)

  return (
    <Container>
      <S.Wrapper onSubmit={handleSubmit}>
        <S.Question>Qual o melhor framework frontend?</S.Question>
        <S.Text>Escolha uma resposta</S.Text>

        <S.Options>
          <div>
            <input
              type="radio"
              id="react"
              name="option"
              value={selectedOption}
              checked={selectedOption === 'react'}
              onChange={handleChange}
            />
            <label htmlFor="react">React</label>
          </div>
          <div>
            <input
              type="radio"
              id="angular"
              name="option"
              value={selectedOption}
              checked={selectedOption === 'angular'}
              onChange={handleChange}
            />
            <label htmlFor="agular">Angular</label>
          </div>
          <div>
            <input
              type="radio"
              id="vue"
              name="option"
              value={selectedOption}
              checked={selectedOption === 'vue'}
              onChange={handleChange}
            />
            <label htmlFor="vue">Vue</label>
          </div>
        </S.Options>

        <S.ButtonsContainer>
          <Button type="submit" onClick={handleVote}>
            Votar
          </Button>
          <Link to={`/poll/result/${pollId}`}>
            <Button variant="secondary">Resultados</Button>
          </Link>
        </S.ButtonsContainer>
      </S.Wrapper>
    </Container>
  )
}

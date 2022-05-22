import { Button } from 'components/Button'
import { Link, useParams } from 'react-router-dom'

import * as S from './styles'

export const Result = () => {
  let params = useParams()
  const pollId = params.pollId

  return (
    <S.Wrapper>
      <S.Question>Qual o melhor framework frontend?</S.Question>

      <S.Options>
        <S.Result>
          <span>React</span> <span>15 votos</span>
        </S.Result>
      </S.Options>

      <Link to={`/poll/${pollId}`}>
        <Button variant="secondary" size="small">
          Voltar
        </Button>
      </Link>
    </S.Wrapper>
  )
}

import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { api } from 'services/api'

import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Input } from 'components/Input'

import * as S from './styles'

dayjs.extend(utc)

export const Home = () => {
  const [optionList, setOptionList] = useState<JSX.Element[]>([])
  const [formValues, setFormValues] = useState<Record<string, unknown>>({
    title: '',
    option1: '',
    option2: '',
    option3: '',
    startDate: '',
    endDate: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function convertToUTC(date: Date) {
    return dayjs(date).utc().local().format()
  }

  function handleInput(field: string, value: string | Date) {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  function handleAddNewOption() {
    const optionNumber = optionList.length + 4

    //setFormValues({ ...formValues, [optionNumber]: '' })

    setOptionList(
      optionList.concat(
        <Input
          key={optionList.length}
          placeholder={`Opção ${optionNumber}`}
          value={formValues[`option${optionNumber}`] as string}
          onChange={(value) =>
            handleInput(`option${optionNumber}`, value.currentTarget.value)
          }
        />,
      ),
    )
  }

  async function handleSubmit(event: FormEvent) {
    setIsLoading(true)

    event.preventDefault()

    try {
      const additionalOptions = optionList.map((_, index) => {
        const key = index + 4
        return formValues[`option${key}`]
      })

      const data = {
        question: formValues.title,
        options: [
          formValues.option1,
          formValues.option2,
          formValues.option3,
          ...additionalOptions,
        ],
        start_date: convertToUTC(new Date(formValues.startDate as string)),
        end_date: convertToUTC(new Date(formValues.endDate as string)),
      }

      //console.log(data)

      const response = await api.post('poll', data)

      navigate(`/poll/${response.data.id}`)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Criar enquete</S.Title>
      <S.Description>
        Preecha os seguintes campos para criar a sua enquete
      </S.Description>

      <Container>
        <S.Card>
          <S.Form onSubmit={handleSubmit}>
            <Input
              label="Titulo"
              placeholder="Digite aqui a sua pergunta"
              value={formValues.title as string}
              onChange={(value) =>
                handleInput('title', value.currentTarget.value)
              }
              required
            />

            <S.Options>
              <Input
                label="Opções de resposta"
                placeholder="Opção 1"
                value={formValues.option1 as string}
                onChange={(value) =>
                  handleInput('option1', value.currentTarget.value)
                }
                required
              />
              <Input
                placeholder="Opção 2"
                value={formValues.option2 as string}
                onChange={(value) =>
                  handleInput('option2', value.currentTarget.value)
                }
                required
              />
              <Input
                placeholder="Opção 3"
                value={formValues.option3 as string}
                onChange={(value) =>
                  handleInput('option3', value.currentTarget.value)
                }
                required
              />
              {optionList}

              <Button
                as="span"
                onClick={handleAddNewOption}
                icon={<PlusCircle />}
              >
                Adicionar opção
              </Button>
            </S.Options>

            <S.Date>
              <Input
                type="datetime-local"
                label="Data de início"
                value={formValues.startDate as string}
                onChange={(value) =>
                  handleInput('startDate', value.currentTarget.value)
                }
                required
              />
              <Input
                type="datetime-local"
                label="Data de término"
                value={formValues.endDate as string}
                onChange={(value) =>
                  handleInput('endDate', value.currentTarget.value)
                }
                required
              />
            </S.Date>

            <S.ButtonContainer>
              <Button type="submit" fullWidth>
                {isLoading ? 'Carregando...' : 'Criar enquete'}
              </Button>
            </S.ButtonContainer>
          </S.Form>
        </S.Card>
      </Container>
    </S.Wrapper>
  )
}

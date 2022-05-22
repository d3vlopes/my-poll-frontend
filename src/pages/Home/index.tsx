import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Input } from 'components/Input'

import * as S from './styles'

export const Home = () => {
  const [optionList, setOptionList] = useState<JSX.Element[]>([])

  const [formValues, setFormValues] = useState({
    title: '',
    option1: '',
    option2: '',
    option3: '',
    startDate: Date,
    endDate: Date,
  })

  function handleInput(field: string, value: string | Date) {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log('submit form')
  }

  function handleAddNewOption() {
    const optionNumber = optionList.length + 4

    setFormValues({ ...formValues, [optionNumber]: '' })

    setOptionList(
      optionList.concat(
        <Input
          key={optionList.length}
          placeholder={`Opção ${optionNumber}`}
          // value={formValues[`option${optionNumber}`]}
          onChange={(value) =>
            handleInput(`option${optionNumber}`, value.currentTarget.value)
          }
        />,
      ),
    )
  }

  console.log(formValues)

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
              value={formValues.title}
              onChange={(value) =>
                handleInput('title', value.currentTarget.value)
              }
            />

            <S.Options>
              <Input
                label="Opções de resposta"
                placeholder="Opção 1"
                value={formValues.option1}
                onChange={(value) =>
                  handleInput('option1', value.currentTarget.value)
                }
              />
              <Input
                placeholder="Opção 2"
                value={formValues.option2}
                onChange={(value) =>
                  handleInput('option2', value.currentTarget.value)
                }
              />
              <Input
                placeholder="Opção 3"
                value={formValues.option3}
                onChange={(value) =>
                  handleInput('option3', value.currentTarget.value)
                }
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
              <Input type="datetime-local" label="Data de início" />
              <Input type="datetime-local" label="Data de término" />
            </S.Date>

            <S.ButtonContainer>
              <Button type="submit" fullWidth>
                Criar enquete
              </Button>
            </S.ButtonContainer>
          </S.Form>
        </S.Card>
      </Container>
    </S.Wrapper>
  )
}

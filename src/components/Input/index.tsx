import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  initialValue?: string
  onInputChange?: (value: string) => void
}

export const Input = ({
  label,
  name,
  initialValue = '',
  onInputChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.Wrapper>
  )
}

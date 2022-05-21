import { SelectHTMLAttributes, useState } from 'react'

import * as S from './styles'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  initialValue?: string
  onSelectChange?: (value: string) => void
}

export const Select = ({
  label,
  name,
  initialValue = '',
  onSelectChange,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onSelectChange && onSelectChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>

      <select
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        {...props}
      >
        <option value="in progress">Em andamento</option>
        <option value="not start">Não iniciado</option>
        <option value="complete">Finalizado</option>
      </select>
    </S.Wrapper>
  )
}

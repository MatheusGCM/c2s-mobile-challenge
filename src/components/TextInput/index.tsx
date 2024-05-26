import React from 'react'
import { TextInputProps } from 'react-native'

import { Input, InputContainer, Label } from './styles'

export function TextInput({
  label,
  ...rest
}: TextInputProps & { label?: string }) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </InputContainer>
  )
}

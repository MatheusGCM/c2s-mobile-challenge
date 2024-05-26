import Icon from '@expo/vector-icons/Ionicons'
import React from 'react'

import {
  FlexRow,
  ImageContainer,
  ImageStudentDetails,
  ModalContent,
} from './styles'
import { TextInput } from '../TextInput'

import { Student } from '@/@types/student'
import { defaultTheme } from '@/styles/themes'
import { dateFormat } from '@/utils/format-date'

export function StudentDetails({
  picture,
  name,
  email,
  gender,
  dob,
  phone,
  nat,
  location,
  id,
}: Student) {
  return (
    <ModalContent>
      <ImageContainer>
        {picture ? (
          <ImageStudentDetails
            source={{
              uri: picture.large,
            }}
          />
        ) : (
          <Icon
            name="person-circle-sharp"
            size={150}
            color={defaultTheme.mutedForeground}
          />
        )}
      </ImageContainer>

      <FlexRow>
        <TextInput
          label="Nome"
          value={`${name.first} ${name.last}`}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
        <TextInput
          label="CPF"
          value={id.value}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
      </FlexRow>
      <FlexRow>
        <TextInput
          label="Data de nascimento"
          value={dateFormat(dob.date)}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
        <TextInput
          label="Telefone"
          value={phone}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
      </FlexRow>
      <FlexRow>
        <TextInput
          label="Gênero"
          value={gender === 'male' ? 'Masculino' : 'Feminino'}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
        <TextInput
          label="Nacionalidade"
          value={nat}
          editable={false}
          style={{ color: defaultTheme.mutedForeground }}
        />
      </FlexRow>
      <TextInput
        label="Email"
        value={email}
        editable={false}
        style={{ color: defaultTheme.mutedForeground }}
      />
      <TextInput
        label="Endereço"
        value={`${location.street.name}, ${location.street.number}, ${location.city}`}
        editable={false}
        style={{ color: defaultTheme.mutedForeground }}
      />
    </ModalContent>
  )
}

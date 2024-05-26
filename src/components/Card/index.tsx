import Icon from '@expo/vector-icons/Ionicons'
import React, { memo } from 'react'
import { View } from 'react-native'

import { CardContainer, CardSubtitle, CardTitle, CardImage } from './styles'

import { defaultTheme } from '@/styles/themes'
import { dateFormat } from '@/utils/format-date'

interface CardProps {
  picture: string
  name: string
  gender: string
  birthdate: string
  onPress?(): void
}

export const Card = memo(
  ({ picture, name, gender, birthdate, onPress }: CardProps) => {
    return (
      <CardContainer onPress={onPress}>
        {picture ? (
          <CardImage
            source={{
              uri: picture,
            }}
          />
        ) : (
          <Icon
            name="person-circle-outline"
            size={70}
            color={defaultTheme.mutedForeground}
          />
        )}

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <CardTitle>{name}</CardTitle>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <CardSubtitle>
              {gender === 'male' ? 'Masculino' : 'Feminino'}
            </CardSubtitle>
            <CardSubtitle>{dateFormat(birthdate)}</CardSubtitle>
          </View>
        </View>
      </CardContainer>
    )
  },
)

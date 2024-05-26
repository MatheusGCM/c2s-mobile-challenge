import Icon from '@expo/vector-icons/Ionicons'

import { EmptyComponentContainer, EmptyComponentText } from './styles'

import { defaultTheme } from '@/styles/themes'

export function ListEmptyComponent() {
  return (
    <EmptyComponentContainer>
      <Icon
        name="person-outline"
        size={24}
        color={defaultTheme.mutedForeground}
      />
      <EmptyComponentText>Não encontrado</EmptyComponentText>
    </EmptyComponentContainer>
  )
}

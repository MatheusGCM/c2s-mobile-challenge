import Icon from '@expo/vector-icons/Ionicons'

import { defaultTheme } from '@/styles/themes'

type Gender = 'male' | 'female'

interface GenderIconProps {
  gender: Gender
  selectedGender: Gender | null
  onPress(): void
}

export function GenderIcon({
  gender,
  selectedGender,
  onPress,
}: GenderIconProps) {
  const isSelected = selectedGender === gender
  const color = isSelected ? defaultTheme.foreground : defaultTheme.border
  return <Icon onPress={onPress} name={gender} size={24} color={color} />
}

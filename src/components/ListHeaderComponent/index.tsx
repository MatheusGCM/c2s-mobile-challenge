import React from 'react'

import { Title } from './styles'
import { TextInput } from '../TextInput'

import { useSearchStore } from '@/store/use-search-store'
import { defaultTheme } from '@/styles/themes'

export function ListHeaderComponent() {
  const { search, handleSearch } = useSearchStore()

  return (
    <>
      <Title>InnovateTech</Title>

      <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder="Buscar aluno"
        placeholderTextColor={defaultTheme.mutedForeground}
      />
    </>
  )
}

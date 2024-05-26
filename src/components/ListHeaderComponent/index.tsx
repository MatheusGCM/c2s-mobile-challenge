import Icon from '@expo/vector-icons/Ionicons'
import React from 'react'

import { FilterContainer, Title } from './styles'
import { GenderIcon } from '../GenderIcon'
import { TextInput } from '../TextInput'

import { useFilterStore } from '@/store/use-filter-store'
import { defaultTheme } from '@/styles/themes'

export function ListHeaderComponent() {
  const {
    search,
    filterGender,
    handleSearch,
    handleFilterGender,
    handleCleanFilters,
  } = useFilterStore()

  return (
    <>
      <Title>InnovateTech</Title>
      <FilterContainer>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Buscar aluno"
          placeholderTextColor={defaultTheme.mutedForeground}
        />
        <GenderIcon
          gender="female"
          selectedGender={filterGender}
          onPress={() => handleFilterGender('female')}
        />
        <GenderIcon
          gender="male"
          selectedGender={filterGender}
          onPress={() => handleFilterGender('male')}
        />
        <Icon
          onPress={handleCleanFilters}
          name="close"
          size={24}
          color={defaultTheme.foreground}
        />
      </FilterContainer>
    </>
  )
}

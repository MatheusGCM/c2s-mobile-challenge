import styled from 'styled-components/native'

export const EmptyComponentContainer = styled.View`
  align-items: center;
  gap: 3px;
`

export const EmptyComponentText = styled.Text`
  color: ${({ theme }) => theme.mutedForeground};
  text-align: center;
`

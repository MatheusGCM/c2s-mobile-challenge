import styled from 'styled-components/native'

export const Title = styled.Text`
  align-self: center;
  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.foreground};
`

export const FilterContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

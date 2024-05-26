import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View`
  flex: 1;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${theme.foreground};
  `}
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    height: 40px;
    border: 1px solid ${theme.input};
    border-radius: 6px;
    padding: 8px 12px;
    background-color: ${theme.background};
    font-size: 16px;
    color: ${theme.foreground};
  `}
`

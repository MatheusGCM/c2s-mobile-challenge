import styled, { css } from 'styled-components/native'

export const CardContainer = styled.Pressable`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    border: 1px solid ${theme.border};
    border-radius: 8px;
    padding: 16px;
    gap: 20px;
  `}
`
export const CardImage = styled.Image`
  border-radius: 9999px;
  aspect-ratio: 1 / 1;
  width: 70px;
  border: 1px solid ${({ theme }) => theme.border};
`

const Text = styled.Text`
  color: ${({ theme }) => theme.foreground};
`

export const CardTitle = styled(Text)`
  font-weight: 900;
  font-size: 24px;
`

export const CardSubtitle = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.mutedForeground};
`

import styled from 'styled-components/native'

export const ModalContent = styled.View`
  position: absolute;
  z-index: 9999;
  width: 100%;
  padding: 25px;
  gap: 15px;
  background-color: ${({ theme }) => theme.background};
  border-color: ${({ theme }) => theme.border};
  border-top-width: 2px;
`

export const ImageContainer = styled.View`
  margin-top: -75px;
  align-items: center;
`
export const ImageStudentDetails = styled.Image`
  border-radius: 9999px;
  aspect-ratio: 1 / 1;
  width: 150px;
  border: 2px solid ${({ theme }) => theme.border};
`
export const FlexRow = styled.View`
  flex-direction: row;
  gap: 5px;
`

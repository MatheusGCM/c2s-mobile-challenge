import {
  useFonts,
  Roboto_700Bold as Roboto700,
  Roboto_500Medium as Roboto500,
  Roboto_400Regular as Roboto400,
} from '@expo-google-fonts/roboto'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Home } from '@/screens/Home'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto700,
    Roboto500,
    Roboto400,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle>
        <StatusBar />
        <Home />
      </GlobalStyle>
    </ThemeProvider>
  )
}

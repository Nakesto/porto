import '../styles/globals.css'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'black')(props),
      }
    })
  },
  colors: {
    primary: "#14213D",
    secondary: "#FCA311",
    tertiary: "#E5E5E5",
  }
})

function ForceLightMode({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ForceLightMode>
        <Navbar />
        <Component {...pageProps} />
      </ForceLightMode>
    </ChakraProvider>
  )
}

export default MyApp

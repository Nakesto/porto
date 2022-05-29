import { Button, Container, useColorMode, VStack } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Vincent Page</title>
        <meta name="description" content="My life, My Advanture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack height={'100vh'}>
        <Container maxW='100%' color='white'>
        </Container>
      </VStack>
    </div>
  )
}

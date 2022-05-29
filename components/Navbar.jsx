import { Box, Button, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg="transparent" w="100%" h="100px" position="fixed" zIndex="1" px={'18%'}>
                <Flex alignItems='center' h="100%">
                    <Box w='70px' h='60px' bg='red.500' />
                    <Spacer />
                    <Flex h='60px' bg='transparent' gap='20px'>
                        <Button h='100%' color='secondary'>
                            Home
                        </Button>
                        <Button h='100%' color='white'>
                            About
                        </Button>
                        <Button h='100%' color='white'>
                            Contact
                        </Button>
                        <Button h='100%' color='white'>
                            Experience
                        </Button>
                        <Button h='100%' color='white' onClick={toggleColorMode}>
                            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar
import React, { useState } from 'react';
import { ReactComponent as MemeifyLogoLight } from './icons/logo-light.svg';
import { ReactComponent as MemeifyLogoDark } from './icons/logo-dark.svg';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Container,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  const [colourTheme, setColourTheme] = useState('');
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid templateColumns="repeat(2, 1fr)" p={3}>
          <Box h="10" maxW="xs">
            {colourTheme === 'light' ? (
              <MemeifyLogoLight />
            ) : (
              <MemeifyLogoDark />
            )}
          </Box>
          <Box w="100%" h="10">
            <ColorModeSwitcher
              justifySelf="flex-end"
              giveTheme={val => setColourTheme(val)}
            />
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

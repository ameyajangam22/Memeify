import React, { useState } from 'react';
import { ReactComponent as MemeifyLogoLight } from './icons/logo-light.svg';
import { ReactComponent as MemeifyLogoDark } from './icons/logo-dark.svg';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  const [colourTheme, setColourTheme] = useState('');
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher
            justifySelf="flex-end"
            giveTheme={val => setColourTheme(val)}
          />
          <VStack spacing={8}>
            {colourTheme == 'light' ? (
              <MemeifyLogoLight />
            ) : (
              <MemeifyLogoDark />
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

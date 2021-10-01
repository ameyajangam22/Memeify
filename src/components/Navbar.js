import React, { useState } from 'react';
import { ReactComponent as MemeifyLogoLight } from '../icons/logo-light.svg';
import { ReactComponent as MemeifyLogoDark } from '../icons/logo-dark.svg';
import {
  Box,
  Grid,
  GridItem,
  Container,
  Flex,
  theme,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const Navbar = () => {
  const [colourTheme, setColourTheme] = useState('');
  return (
    <>
      <Container minW="100%" mt={2} fontSize={{ sm: 'sm', md: 'lg' }}>
        <Grid templateColumns="repeat(5, 1fr)" p={2}>
          <GridItem colSpan={{ sm: 2, md: 1 }}>
            <Flex
              w={{ sm: '100%', md: '100%' }}
              justifyContent="start"
              alignItems="center"
            >
              {colourTheme === 'light' ? (
                <MemeifyLogoLight />
              ) : (
                <MemeifyLogoDark />
              )}
            </Flex>
          </GridItem>
          <GridItem colStart={3} colEnd={4}>
            <Flex w="100%" justifyContent="center" align="center">
              <Link textDecoration="none" w={{ sm: '100%', md: '10rem' }} p={2}>
                Login
              </Link>
            </Flex>
          </GridItem>
          <GridItem colStart={4} colEnd={5}>
            <Flex w="100%" justify="center" align="center">
              <Link w={{ sm: '100%', md: '10rem' }} p={2}>
                Make Memes
              </Link>
            </Flex>
          </GridItem>
          <GridItem colStart={5} colEnd={6}>
            <Flex w="100%" justifyContent="end" align="center">
              <ColorModeSwitcher
                justifySelf="flex-end"
                giveTheme={val => setColourTheme(val)}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Navbar;

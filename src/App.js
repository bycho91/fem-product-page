import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="container.xl">
        <Box textAlign="center" fontSize="xl">
          rest
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;

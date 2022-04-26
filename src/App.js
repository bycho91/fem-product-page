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
import CartCard from './components/CartCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="container.xl">
        <Box fontSize="xl">
          <CartCard />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;

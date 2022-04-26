import { Box, Stack, Text, useColorMode, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as={motion.div}
      exit={{ opacity: 0 }}
      pos="absolute"
      bg="blackAlpha.400"
      width="100vw"
      h="100vh"
      top="0"
      left="0"
      zIndex={2}
    >
      <Box
        as={motion.div}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        h="100vh"
        w="60vw"
        bg={colorMode === 'dark' ? '#1A202C' : 'white'}
        pos="absolute"
        top="0"
        left="0"
        zIndex={3}
        py="5em"
        px="1em"
      >
        <Stack as="ul" px="1em" textDecoration="none" spacing={6} fontSize="xl">
          <Link to="/collections">
            <Text fontWeight="bold">Collections</Text>
          </Link>
          <Link to="/men">
            <Text fontWeight="bold">Men</Text>
          </Link>
          <Link to="/women">
            <Text fontWeight="bold">Women</Text>
          </Link>
          <Link to="/about">
            <Text fontWeight="bold">About</Text>
          </Link>
          <Link to="/contact">
            <Text fontWeight="bold">Contact</Text>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;

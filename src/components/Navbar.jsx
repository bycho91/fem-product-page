import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  scaleFadeConfig,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/images/image-avatar.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode } = useColorMode();

  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <Box h="70px" bg={colorMode === 'dark' ? 'default' : 'white'}>
      <Container
        maxW="container.xl"
        px="1em"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <AnimatePresence>
          {toggleSidebar ? <Sidebar toggleSidebar={toggleSidebar} /> : null}
        </AnimatePresence>
        <Box display="flex" alignItems="center" gap=".5em">
          <Icon
            w="30px"
            h="30px"
            pt="5px"
            display={['flex', 'flex', 'none']}
            onClick={() => setToggleSidebar(!toggleSidebar)}
            position="relative"
            zIndex={3}
          >
            {toggleSidebar ? <CloseIcon /> : <HamburgerIcon />}
          </Icon>
          <Heading as="h3" letterSpacing=".05em">
            sneakers
          </Heading>
          <Flex
            gap={4}
            alignItems="center"
            pt=".7em"
            ml="2em"
            display={['none', 'none', 'flex']}
            color={colorMode === 'dark' ? 'whiteAlpha.700' : 'blackAlpha.600'}
          >
            <Link to="/collections">
              <Text>Collections</Text>
            </Link>
            <Link to="/men">
              <Text>Men</Text>
            </Link>
            <Link to="/women">
              <Text>Women</Text>
            </Link>
            <Link to="/about">
              <Text>About</Text>
            </Link>
            <Link to="/contact">
              <Text>Contact</Text>
            </Link>
          </Flex>
        </Box>
        <Box display="flex" alignItems="center" pt="1.3rem" gap=".3em">
          <ColorModeSwitcher />
          <Icon
            w="30px"
            h="30px"
            _hover={{
              transform: 'scale(1.05)',
              cursor: 'pointer',
              transition: '.2s ease all',
            }}
          >
            <FiShoppingCart />
          </Icon>
          <Avatar size="sm" mb="13px" src={AvatarImg} />
        </Box>
      </Container>
      <Divider display={['none', 'none', 'block']} />
    </Box>
  );
};

export default Navbar;

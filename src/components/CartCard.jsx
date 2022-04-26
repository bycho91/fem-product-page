import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React from 'react';
import ProudctImg from '../assets/images/image-product-1-thumbnail.jpg';

const CartCard = () => {
  return (
    <Box borderRadius="lg" w="300px" shadow="lg">
      <Text fontSize="xl" fontWeight="bold" p=".5em">
        Your Cart
      </Text>
      <Divider />
      <HStack p=".7em" justifyContent="space-evenly">
        <Image src={ProudctImg} w="50px" h="50px" borderRadius="lg" />
        <Box>
          <Text fontSize="sm" isTruncated>
            Autum Limited Edition
          </Text>
          <Text fontSize="sm" opacity="70%">
            $125.00 x 3
            <span
              style={{
                fontWeight: 'bold',
                marginLeft: '.6em',
                opacity: '100%',
              }}
            >
              $375.00
            </span>
          </Text>
        </Box>
        <Icon
          w="20px"
          h="20px"
          opacity="60%"
          _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }}
        >
          <DeleteIcon />
        </Icon>
      </HStack>
      <Box p=".5em">
        <Button colorScheme="orange" width="100%">
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartCard;

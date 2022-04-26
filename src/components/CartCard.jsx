import {
  Box,
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
        Cart
      </Text>
      <Divider />
      <HStack p="1em" justifyContent="space-evenly">
        <Image src={ProudctImg} w="40px" h="40px" borderRadius="lg" />
        <Box>
          <Text fontSize="sm" isTruncated>
            Autum Limited Edition
          </Text>
          <Text fontSize="sm">$125.00 x 3</Text>
        </Box>
        <Icon w="20px" h="20px">
          <DeleteIcon />
        </Icon>
      </HStack>
    </Box>
  );
};

export default CartCard;

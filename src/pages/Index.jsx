import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const vegetables = [
  { id: 1, name: "Carrot", price: "$2.00", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJyb3R8ZW58MHx8fHwxNzE3Mjk0MDU2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Broccoli", price: "$3.00", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicm9jY29saXxlbnwwfHx8fDE3MTcyOTQwNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Tomato", price: "$1.50", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b21hdG98ZW58MHx8fHwxNzE3Mjk0MDU3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Lettuce", price: "$1.00", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZXR0dWNlfGVufDB8fHx8MTcxNzI5NDA1N3ww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Vegetable Store
        </Heading>
        <HStack spacing={8} wrap="wrap" justify="center">
          {vegetables.map((veg) => (
            <Box key={veg.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="250px" textAlign="center">
              <Image src={veg.image} alt={veg.name} boxSize="200px" objectFit="cover" />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {veg.name}
                </Text>
                <Text fontSize="md" color="gray.500">
                  {veg.price}
                </Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={4}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

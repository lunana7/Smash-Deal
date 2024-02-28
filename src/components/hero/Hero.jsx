import hero from "../../assets/hero3.png";
import { TbArrowNarrowRight } from "react-icons/tb";
import StarsBackground from "../ui/StarBackground";
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useEffect, useState } from "react";
const tags = ["Bag", "Racket", "Clothes", "Shoes", "Shuttles"];

let currentIndex = 0;
const Hero = () => {
  const [tagName, setTagName] = useState("");
  function updateCountdown() {
    const currentItem = tags[currentIndex];
    setTagName(currentItem);
    currentIndex = (currentIndex + 1) % tags.length;
    setTimeout(updateCountdown, 2000);
  }

  useEffect(() => {
    updateCountdown();
  }, []);

  return (
    <Box position="relative" overflow="hidden">
      {/* StarsBackground with absolute position */}
      <Box position="absolute" width="100%" height="100%">
        <StarsBackground />
      </Box>

      {/* Content with higher z-index to appear above the background */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        textAlign="center"
        zIndex="2"
        position="relative"
      >
        <Heading as="h2" size="2xl" mb={4} color="white">
          Welcome to SmashDeals
        </Heading>
        <Text fontSize="xl" px={8} color="white">
          Discover the best deals on used badminton{" "}
          <Text
            as="span"
            color="teal.500"
            opacity="100"
            transition="opacity 2s"
          >
            {tagName}
          </Text>{" "}
          . Sell your gear or shop for quality items.
        </Text>

        <Button
          as={RouterLink}
          to="/all"
          mt={10}
          bg="blue.600"
          color="white"
          _hover={{ bg: "teal.700" }}
          size="lg"
          borderRadius="full"
        >
          Shop Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
/* <Flex
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", lg: "1/2" }}
            mt={{ base: 6, lg: 0 }}
          >
            <Image
              w="full"
              h="full"
              maxW={{ lg: "3xl" }}
              src="/src/assets/hero-image.webp"
              alt="Catalogue-pana.svg"
            />
          </Flex> */

import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Center, chakra, Flex, GridItem, Stack, SimpleGrid, Link } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bienvenue sur workbook</title>
      </Head>
      <main>
      <Flex px={4} py={12} mx="auto">
      <Box mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }}>
        <chakra.h1 mb={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" lineHeight="shorter" color="gray.900">
          All the tools you need to practice
        </chakra.h1>
        <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
          Today students needs apps to engage their teachers and get instant feedbacks on
          school assignments and self practice. Step up your ability to succeed with us.
        </chakra.p>
        <chakra.h2
          mb={3}
          fontSize={{ base: "2xl", md: "3xl" }}
          lineHeight="shorter"
          color="gray.900">
          Features
        </chakra.h2>
      <SimpleGrid columns={2}>
        <Box>
          <chakra.h4
          mb={2}
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="shorter"
          color="gray.700">
          Digital Exercise Book
        </chakra.h4>
        <chakra.p>A short paragraph to describe the feature</chakra.p>
      </Box>
        <Box>
          <chakra.h4
          mb={2}
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="shorter"
          color="gray.700">
          Virtual classrooms
        </chakra.h4>
        <chakra.p>A short paragraph to describe the feature</chakra.p>
      </Box>
        <Box>
          <chakra.h4
          mb={2}
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="shorter"
          color="gray.700">
          Teacher reviews
        </chakra.h4>
        <chakra.p>A short paragraph to describe the feature</chakra.p>
      </Box>
        <Box>
          <chakra.h4
          mb={2}
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="shorter"
          color="gray.700">
          Bring your exercises
        </chakra.h4>
        <chakra.p>A short paragraph to describe the feature</chakra.p>
      </Box>
      </SimpleGrid>
      </Box>
    </Flex>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg={useColorModeValue("gray.50", "gray.800")}  w={{ lg: 8 / 12, xl: 5 / 12 }} >
        <Box
          w="full"
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <chakra.span display="block">Ready to practice ?</chakra.span>
          </chakra.h2>
            <Link
              href='/dashboard'
              w={["full", , "auto"]}
              display="block"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >Engage with us.</Link>
        </Box>
      </Box>
    </Flex>
      </main>
    </div>
  )
}



export default Home

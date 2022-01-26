import { Box, Center, chakra, Flex, GridItem, Link, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
    return (
        <main>
          <div px={4} py={12} mx="auto">
            <StudySubjectIntro title="Mathématiques" url="/maths" />
            <StudySubjectIntro title="Anglais" url="/maths" />
            <StudySubjectIntro title="Français" url="/maths" />
            <StudySubjectIntro title="Philosophie" url="/maths" />
          </div>
        </main>
    )
}


type StudySubjectIntroProps = {
title: string,
url: string
}

const StudySubjectIntro = ({ title, url} : StudySubjectIntroProps) => {
return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {title}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </chakra.p>
        </Box>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            6 exos à finir
          </chakra.h1>
          <Link
            href="/study_subjects/show"
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Practice
          </Link>
        </Flex>
      </Box>
    </Flex>
)
}

export default Dashboard
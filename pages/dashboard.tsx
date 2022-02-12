import { Box, Center, chakra, Flex, GridItem, Link, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
    return (
        <main>
          <div>
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
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
      >
        <Box>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {title}
          </chakra.h1>
          <chakra.p
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
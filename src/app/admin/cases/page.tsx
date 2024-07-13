import prisma from "@/db";
import { deleteCase } from "@/src/actions/case";
import { DeleteCaseButton } from "@/src/components/Cases/DeleteCaseButton";
import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default async function Cases() {
  const cases = await prisma.case.findMany({
    include: {
      _count: {
        select: { features: true },
      },
    },
  });

  return (
    <main>
      <Flex mb={4}>
        <Heading>Cases</Heading>
        <Box ml="auto">
          <Link as={NextLink} href="/admin/cases/new">
            <Button as="a">Add Case</Button>
          </Link>
        </Box>
      </Flex>

      {cases.length === 0 ? (
        <Text>No cases found yet</Text>
      ) : (
        <Grid
          gap={4}
          gridTemplate={"1fr / 20px 100px 2fr 1fr 1fr 1fr"}
          w={"100%"}
        >
          {cases.map((caseData) => (
            <>
              <GridItem>{caseData.order}</GridItem>
              <GridItem>
                <Image
                  objectFit={"cover"}
                  w={"100px"}
                  h={"100px"}
                  src={caseData.imageUrl}
                  alt={caseData.title}
                  borderRadius="lg"
                />
              </GridItem>
              <GridItem>
                <Heading size="md">{caseData.title}</Heading>
                <Text display="block">{caseData.description}</Text>
              </GridItem>
              <GridItem>
                <Text>{caseData.createdAt.toDateString()}</Text>
                <Text>{caseData.updatedAt.toDateString()}</Text>
              </GridItem>
              <GridItem>{caseData._count.features} feature(s)</GridItem>
              <GridItem>
                <VStack alignItems="justify">
                  <Link
                    w={"100%"}
                    textAlign={"center"}
                    py={1}
                    border={"1px"}
                    borderRadius="md"
                    as={NextLink}
                    href={`/admin/cases/${caseData.id}`}
                  >
                    Edit
                  </Link>
                  <DeleteCaseButton
                    deleteCase={deleteCase}
                    id={caseData.id}
                    title={caseData.title}
                  />
                </VStack>
              </GridItem>
            </>
          ))}
        </Grid>
      )}
    </main>
  );
}

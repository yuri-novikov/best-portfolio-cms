import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Tag,
} from "@chakra-ui/react";
import { CaseItem } from "../Cases/CaseForm";
import { FeatureItem } from "./FeatureItem";

type Props = {
  cases: CaseItem[];
};

export const Portfolio = ({ cases }: Props) => {
  return (
    <Flex flexWrap="wrap" gap={4}>
      {cases.map((caseItem) => (
        <Card key={caseItem.id} flexBasis={["100%", "48%"]}>
          <CardBody p={0}>
            <Image
              src={caseItem.imageUrl}
              alt={caseItem.title}
              borderRadius="lg"
              objectFit="cover"
              maxH={"350px"}
              w={"100%"}
            />
            <Stack gap={4} pt={4} px={4} pb={6}>
              <Stack>
                <Heading mb={4} size="md">
                  {caseItem.title}
                </Heading>
                <Text>{caseItem.description}</Text>
              </Stack>
              {caseItem.features.length > 0 && (
                <Stack>
                  {caseItem.features.map((feature) => (
                    <Flex
                      key={feature.id}
                      gap={2}
                      flex={1}
                      alignItems={"center"}
                    >
                      <FeatureItem feature={feature} />
                    </Flex>
                  ))}
                </Stack>
              )}
              {caseItem.tags.length > 0 && (
                <Flex direction="row" gap={2} flexWrap="wrap">
                  {caseItem.tags.map((tag) => (
                    <Tag
                      py={2}
                      px={4}
                      borderRadius={"full"}
                      colorScheme="teal"
                      key={tag.id}
                    >
                      {tag.title}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

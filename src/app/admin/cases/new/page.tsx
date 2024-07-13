import { createCase } from "@/src/actions/case";
import { AddCase } from "@/src/components/Cases/AddCase";
import { Flex, Heading } from "@chakra-ui/react";

export default async function NewCase() {
  return (
    <main>
      <Flex mb={4}>
        <Heading>New Case</Heading>
      </Flex>

      <AddCase createCase={createCase} />
    </main>
  );
}

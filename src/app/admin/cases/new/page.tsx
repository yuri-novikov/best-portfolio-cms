import prisma from "@/db";
import { createCase } from "@/src/actions/case";
import { AddCase } from "@/src/components/Cases/AddCase";
import { Flex, Heading } from "@chakra-ui/react";
import { Tag } from "@prisma/client";

export default async function NewCase() {
  const existingTags = await prisma.tag.findMany();
  const tagsOptions = existingTags.map((tag: Tag) => ({
    id: tag.id,
    title: tag.title,
  }));

  return (
    <main>
      <Flex mb={4}>
        <Heading>New Case</Heading>
      </Flex>

      <AddCase createCase={createCase} tagsOptions={tagsOptions} />
    </main>
  );
}

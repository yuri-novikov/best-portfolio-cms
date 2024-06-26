import prisma from "@/db";
import { createTag, deleteTag, editTag } from "@/src/actions/tag";
import AddTagButton from "@/src/components/Tags/AddTagButton";
import { Tag } from "@/src/components/Tags/Tag";
import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default async function Cases() {
  const tags = await prisma.tag.findMany();

  return (
    <main>
      <Flex mb={4}>
        <Heading>Tags</Heading>
        <Box ml="auto">
          <AddTagButton createTag={createTag} />
        </Box>
      </Flex>
      {tags.length === 0 ? (
        <Text>No tags found yet</Text>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Created</Th>
                <Th>Updated</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  {...tag}
                  editTag={editTag}
                  deleteTag={deleteTag}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
}

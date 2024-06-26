"use client";

import { Flex, Td, Tr } from "@chakra-ui/react";
import type * as Prisma from "@prisma/client";
import { DeleteTagButton } from "./DeleteTagButton";
import EditTagButton from "./EditTagButton";

type Props = Prisma.Tag & {
  editTag: (data: FormData) => Promise<void>;
  deleteTag: (id: string) => Promise<void>;
};

export const Tag = ({
  title,
  id,
  createdAt,
  updatedAt,
  editTag,
  deleteTag,
}: Props) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>{createdAt.toDateString()}</Td>
      <Td>{updatedAt.toDateString()}</Td>
      <Td>
        <Flex gap={2}>
          <EditTagButton editTag={editTag} title={title} id={id} />
          <DeleteTagButton deleteTag={deleteTag} title={title} id={id} />
        </Flex>
      </Td>
    </Tr>
  );
};

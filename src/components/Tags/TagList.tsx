import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { Tag } from "@prisma/client";
import { TagOptions } from "../Cases/CaseForm";

type Props = {
  tags: Omit<Tag, "createdAt" | "updatedAt">[];
  tagsOptions: TagOptions[];
};

export const TagList = ({ tags, tagsOptions }: Props) => {
  return (
    <FormControl>
      <FormLabel>Tags</FormLabel>
      <CheckboxGroup defaultValue={tags.map((tag) => tag.id)}>
        <HStack gap={8} flexWrap="wrap">
          {tagsOptions.map(({ id, title }) => {
            return (
              <Checkbox name="tags" key={id} value={id}>
                {title}
              </Checkbox>
            );
          })}
        </HStack>
      </CheckboxGroup>
    </FormControl>
  );
};

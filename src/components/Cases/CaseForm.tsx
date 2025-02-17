import {
  VStack,
  Input,
  Button,
  Link,
  HStack,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { Case, Feature, Tag } from "@prisma/client";
import NextLink from "next/link";
import { FeaturesList } from "../Features/FeaturesList";
import { TagList } from "../Tags/TagList";

export type CaseItem = Omit<Case, "id" | "createdAt" | "updatedAt"> & {
  id?: string;
  features: Omit<Feature, "createdAt" | "updatedAt">[];
  tags: Omit<Tag, "createdAt" | "updatedAt">[];
};

export type TagOptions = {
  id: string;
  title: string;
};

type Props = {
  handleSubmit: (data: FormData) => Promise<void>;
  initialData: CaseItem | null;
  tagsOptions: TagOptions[];
};

export const CaseForm = ({ initialData, handleSubmit, tagsOptions }: Props) => {
  if (!initialData) {
    return null;
  }

  return (
    <form action={handleSubmit}>
      <VStack gap={4}>
        <Input hidden name="id" defaultValue={initialData.id} />

        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" defaultValue={initialData.title} />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input name="description" defaultValue={initialData.description} />
        </FormControl>

        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input name="imageUrl" defaultValue={initialData.imageUrl} />
        </FormControl>

        <FormControl>
          <FormLabel>Order</FormLabel>
          <Input name="order" defaultValue={initialData.order} />
        </FormControl>

        <TagList tags={initialData.tags} tagsOptions={tagsOptions} />

        <FeaturesList features={initialData.features} />

        <HStack gap={4} justifyContent={"flex-end"} w="100%">
          <Link href="/admin/cases" as={NextLink}>
            Cancel
          </Link>
          <Button type="submit" colorScheme="blue">
            {initialData.id ? "Save" : "Create"}
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

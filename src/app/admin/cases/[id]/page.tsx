import prisma from "@/db";
import { updateCase } from "@/src/actions/case";
import { TagOptions } from "@/src/components/Cases/CaseForm";
import { EditCase } from "@/src/components/Cases/EditCase";
import { Tag } from "@prisma/client";

type Props = {
  params: {
    id: string;
  };
};

export default async function Case({ params: { id } }: Props) {
  const singleCase = await prisma.case.findFirst({
    where: {
      id,
    },
    include: {
      features: {
        orderBy: {
          order: "asc",
        },
      },
      tags: true,
    },
  });

  const existingTags = await prisma.tag.findMany();
  const tagsOptions = existingTags.map((tag: Tag) => ({
    id: tag.id,
    title: tag.title,
  }));

  return (
    <EditCase
      initailData={singleCase}
      updateCase={updateCase}
      tagsOptions={tagsOptions}
    />
  );
}

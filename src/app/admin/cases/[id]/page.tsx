import prisma from "@/db";
import { updateCase } from "@/src/actions/case";
import { EditCase } from "@/src/components/Cases/EditCase";

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
    },
  });

  return <EditCase initailData={singleCase} updateCase={updateCase} />;
}

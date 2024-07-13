import prisma from "@/db";
import { getStringValue } from "./utils";

async function createTag(data: FormData) {
  "use server";

  const title = getStringValue(data, "title");

  await prisma.tag.create({ data: { title } });
}

async function editTag(data: FormData) {
  "use server";

  const title = getStringValue(data, "title");
  const id = getStringValue(data, "id");

  await prisma.tag.update({ where: { id }, data: { title } });
}

async function deleteTag(id: string) {
  "use server";
  await prisma.tag.delete({ where: { id } });
}

export { createTag, deleteTag, editTag };

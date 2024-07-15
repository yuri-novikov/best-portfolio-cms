import prisma from "@/db";
import { getStringValue } from "./utils";
import { revalidatePath } from "next/cache";

async function createTag(data: FormData) {
  "use server";

  const title = getStringValue(data, "title");

  await prisma.tag.create({ data: { title } });

  revalidatePath("/admin/tags");
}

async function editTag(data: FormData) {
  "use server";

  const title = getStringValue(data, "title");
  const id = getStringValue(data, "id");

  await prisma.tag.update({ where: { id }, data: { title } });

  revalidatePath("/admin/tags");
}

async function deleteTag(id: string) {
  "use server";
  await prisma.tag.delete({ where: { id } });

  revalidatePath("/admin/tags");
}

export { createTag, deleteTag, editTag };

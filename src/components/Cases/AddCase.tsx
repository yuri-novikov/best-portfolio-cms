"use client";

import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CaseForm, TagOptions } from "./CaseForm";

type Props = {
  createCase: (data: FormData) => Promise<void>;
  tagsOptions: TagOptions[];
};

export const AddCase = ({ createCase, tagsOptions }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (data: FormData) => {
    try {
      await createCase(data);
      toast({
        title: "Case saved.",
        status: "success",
      });
      router.push("/admin/cases");
    } catch (e: any) {
      toast({
        title: "Error occurred. Case not saved.",
        description: e?.message,
        status: "error",
      });
    }
  };

  return (
    <CaseForm
      handleSubmit={handleSubmit}
      tagsOptions={tagsOptions}
      initialData={{
        title: "",
        description: "",
        imageUrl: "",
        order: 0,
        features: [],
        tags: [],
      }}
    />
  );
};

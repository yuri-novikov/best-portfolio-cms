"use client";

import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CaseForm, CaseItem, TagOptions } from "./CaseForm";

type Props = {
  initailData: CaseItem | null;
  updateCase: (data: FormData) => Promise<void>;
};

export const EditCase = ({ updateCase, initailData }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (data: FormData) => {
    try {
      await updateCase(data);
      toast({
        title: "Case updated.",
        status: "success",
      });
      router.push("/admin/cases");
      router.refresh();
    } catch (e: any) {
      toast({
        title: "Error occurred. Case not updated.",
        description: e?.message,
        status: "error",
      });
    }
  };

  return <CaseForm handleSubmit={handleSubmit} initialData={initailData} />;
};

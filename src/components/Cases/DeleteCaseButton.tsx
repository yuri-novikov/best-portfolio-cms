"use client";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const DeleteCaseButton = ({
  deleteCase,
  id,
  title,
}: {
  deleteCase: (id: string) => Promise<void>;
  id: string;
  title: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const router = useRouter();
  const toast = useToast();

  const onDelete = async () => {
    setIsLoading(true);
    try {
      await deleteCase(id);
      onClose();
      toast({
        title: "Case deleted.",
        status: "success",
      });
      setIsLoading(false);
    } catch (e: any) {
      toast({
        title: "Error occurred. Case not deleted.",
        description: e?.message,
        status: "error",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        aria-label="Delete Case"
        colorScheme="red"
        onClick={onOpen}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete case &quot;{title}&quot;
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can`t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={onDelete}
                ml={3}
                isLoading={isLoading}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

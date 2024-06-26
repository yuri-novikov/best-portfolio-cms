"use client";

import { DeleteIcon } from "@chakra-ui/icons";
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
import { useRef } from "react";

export const DeleteTagButton = ({
  deleteTag,
  id,
  title,
}: {
  deleteTag: (id: string) => Promise<void>;
  id: string;
  title: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const router = useRouter();
  const toast = useToast();

  const onDelete = async () => {
    try {
      await deleteTag(id);
      onClose();
      router.refresh();
      toast({
        title: "Tag deleted.",
        status: "success",
      });
    } catch (e: any) {
      toast({
        title: "Error occurred. Tag not saved.",
        description: e?.message,
        status: "error",
      });
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        aria-label="Delete Tag"
        colorScheme="red"
        leftIcon={<DeleteIcon />}
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
              Delete tag &quot;{title}&quot;
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can`t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

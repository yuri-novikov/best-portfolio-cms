"use client";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  createTag: (data: FormData) => Promise<void>;
};

export default function AddTagButton({ createTag }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleSubmit = async (data: FormData) => {
    try {
      await createTag(data);
      onClose();
      router.refresh();
      toast({
        title: "Tag saved.",
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
      <Button aria-label="Add Tag" leftIcon={<AddIcon />} onClick={onOpen}>
        Add
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <form action={handleSubmit}>
            <DrawerCloseButton />
            <DrawerHeader>Add Tag</DrawerHeader>

            <DrawerBody>
              <Input name="title" placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="blue">
                Save
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

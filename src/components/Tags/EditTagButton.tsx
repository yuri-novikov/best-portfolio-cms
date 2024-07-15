"use client";

import { EditIcon } from "@chakra-ui/icons";
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
import { useState } from "react";

type Props = {
  title: string;
  id: string;
  editTag: (data: FormData) => Promise<void>;
};

export default function EditTagButton({ title, id, editTag }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleSubmit = async (data: FormData) => {
    try {
      await editTag(data);
      onClose();
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
      <Button
        variant={"outline"}
        colorScheme="yellow"
        aria-label="Edit Tag"
        leftIcon={<EditIcon />}
        onClick={onOpen}
      >
        Edit
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <form action={handleSubmit}>
            <DrawerCloseButton />
            <DrawerHeader>Edit Tag</DrawerHeader>

            <DrawerBody>
              <Input
                name="title"
                placeholder="Type here..."
                defaultValue={title}
              />
              <Input name="id" value={id} hidden />
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

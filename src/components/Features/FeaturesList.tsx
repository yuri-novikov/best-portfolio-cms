import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FeatureInput } from "./FeatureInput";

export type FeatureShort = {
  id?: string;
  order: number;
  type: string;
  data: string;
};

type Props = {
  features: FeatureShort[];
};

export const FeaturesList = ({ features }: Props) => {
  const [items, setItems] = useState<FeatureShort[]>(features);

  const addEmptyFeature = () => {
    setItems((items) => [
      ...items,
      {
        type: "keyValue",
        data: JSON.stringify(""),
        id: "",
        order: items.length,
      },
    ]);
  };

  return (
    <FormControl>
      <FormLabel>Features</FormLabel>
      {items.map((feature, index) => (
        <VStack key={index} w={"100%"}>
          <FeatureInput feature={feature} index={index} />
          {index !== items.length - 1 && <Divider my={2} />}
        </VStack>
      ))}
      <Box my={4}>
        <IconButton
          width={"100%"}
          aria-label="Add feature"
          icon={<AddIcon />}
          onClick={addEmptyFeature}
        />
      </Box>
    </FormControl>
  );
};

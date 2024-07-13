import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { FeatureShort } from "./FeaturesList";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";

type Props = {
  feature: FeatureShort;
  index: number;
};

export type FeatureType = "keyValue" | "text";

export const FeatureInput = ({ feature, index }: Props) => {
  const initialData = { ...feature, ...JSON.parse(feature.data) };

  const [type, setType] = useState<FeatureType>(
    initialData.type as FeatureType
  );

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as FeatureType);
  };

  return (
    <HStack
      alignItems={"flex-start"}
      w={"100%"}
      justifyContent={"flex-start"}
      gap={4}
    >
      <Box mt={1}>
        <Tag>{index + 1}</Tag>
      </Box>
      <VStack w={"100%"}>
        <HStack justifyContent={"flex-start"} w={"100%"} gap={4}>
          <Input
            hidden
            name={`features.${index}.id`}
            defaultValue={initialData.id}
          />
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
              name={`features.${index}.type`}
              defaultValue={initialData.type}
              onChange={handleTypeChange}
            >
              <option value="keyValue">Key - Value</option>
              <option value="text">Text</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Order</FormLabel>
            <Input
              name={`features.${index}.order`}
              defaultValue={initialData.order}
            />
          </FormControl>
        </HStack>
        <VStack w={"100%"}>
          {type === "keyValue" && (
            <>
              <FormControl>
                <FormLabel>Key</FormLabel>
                <Input
                  name={`features.${index}.key`}
                  defaultValue={initialData.key}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Value</FormLabel>
                <Input
                  name={`features.${index}.value`}
                  defaultValue={initialData.value}
                />
              </FormControl>
            </>
          )}
          {type === "text" && (
            <FormControl>
              <FormLabel>Text</FormLabel>
              <Input
                name={`features.${index}.text`}
                defaultValue={initialData.text}
              />
            </FormControl>
          )}
        </VStack>
      </VStack>
    </HStack>
  );
};

"use client";

import { CheckIcon } from "@chakra-ui/icons";
import { Heading, Text } from "@chakra-ui/react";
import { Feature } from "@prisma/client";

type Props = {
  feature: Omit<Feature, "createdAt" | "updatedAt">;
};

export const FeatureItem = ({ feature }: Props) => {
  const data = JSON.parse(feature.data);

  if (feature.type === "keyValue") {
    return (
      <>
        <Heading size="sm">{data.key}</Heading>
        <Text>{data.value}</Text>
      </>
    );
  }

  if (feature.type === "text") {
    return (
      <>
        <CheckIcon />
        <Text>{data.text}</Text>
      </>
    );
  }

  return <></>;
};

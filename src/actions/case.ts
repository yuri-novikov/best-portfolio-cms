import prisma from "@/db";
import {
  getStringValue,
  getIntValue,
  getArrayValues,
  getFeatureData,
} from "./utils";
import { FeatureItem, featureValidator } from "./validators";

async function createCase(data: FormData) {
  "use server";

  const title = getStringValue(data, "title");
  const description = getStringValue(data, "description");
  const imageUrl = getStringValue(data, "imageUrl");
  const order = getIntValue(data, "order");
  const features = getArrayValues(data, "features", featureValidator);

  const mappedFeatures = features.map((feature: FeatureItem) => ({
    type: feature.type,
    order: Number(feature.order),
    data: getFeatureData(feature),
  }));

  await prisma.case.create({
    data: {
      title,
      description,
      imageUrl,
      order,
      features: {
        create: mappedFeatures,
      },
    },
  });
}

async function updateCase(data: FormData) {
  "use server";

  const id = getStringValue(data, "id");
  const title = getStringValue(data, "title");
  const description = getStringValue(data, "description");
  const imageUrl = getStringValue(data, "imageUrl");
  const order = getIntValue(data, "order");
  const features = getArrayValues(data, "features", featureValidator);

  const mappedFeatures = features.map((feature: FeatureItem) => ({
    id: feature.id,
    type: feature.type,
    order: Number(feature.order),
    data: getFeatureData(feature),
  }));

  // update case and add new features
  await prisma.case.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      imageUrl,
      order,
      features: {
        create: mappedFeatures
          .filter((feature) => !feature.id)
          .map((feature) => {
            delete feature.id;
            return feature;
          }),
      },
    },
  });

  // update existing features
  const queries = mappedFeatures
    .filter((feature) => feature.id)
    .map((feature) => {
      return prisma.feature.update({
        where: {
          id: feature.id,
        },
        data: {
          type: feature.type,
          order: feature.order,
          data: feature.data,
        },
      });
    });

  if (queries.length > 0) {
    await prisma.$transaction(queries);
  }
}

export { createCase, updateCase };

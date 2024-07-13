import { FeatureItem } from "./validators";

export const getStringValue = (data: FormData, fieldName: string): string => {
  const value = data.get(fieldName)?.valueOf();

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Invalid ${fieldName}`);
  }

  return value;
};

// export const getStringsArrayValue = (
//   data: FormData,
//   fieldName: string
// ): string[] | undefined => {
//   const value = data.get(fieldName)?.valueOf();

//   if (typeof value !== "string" || value.length === 0) {
//     throw new Error(`Invalid ${fieldName}`);
//   }

//   return undefined;
// };

export const getIntValue = (data: FormData, fieldName: string): number => {
  let value = data.get(fieldName)?.valueOf();
  value = Number(value);

  if (typeof value !== "number") {
    throw new Error(`Invalid ${fieldName}`);
  }

  return value;
};

export const getArrayValues = (
  data: FormData,
  fieldName: string,
  validator: (item: any) => boolean
): [] => {
  const valuesMap: any = [];

  for (const [key, value] of data.entries()) {
    if (key.startsWith(fieldName)) {
      const [, entityIndex, entityProperty] = key.split(".");

      const index = Number(entityIndex);

      if (!valuesMap[index]) {
        valuesMap[index] = {};
      }

      valuesMap[index][entityProperty] = value;
    }
  }

  for (const item of valuesMap) {
    if (!validator(item)) {
      throw new Error(`Invalid ${fieldName}`);
    }
  }

  return valuesMap;
};

export const getFeatureData = (feature: FeatureItem): string => {
  if (feature.type === "keyValue") {
    return JSON.stringify({
      key: feature.key,
      value: feature.value,
    });
  }

  if (feature.type === "text") {
    return JSON.stringify({
      text: feature.text,
    });
  }

  return "";
};

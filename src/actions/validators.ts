export const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

export const isString = (value: any): boolean => {
  return typeof value === "string" && value.length > 0;
};

export type FeatureItem = {
  type: string;
  [key: string]: any;
};

export const featureValidator = (feature: FeatureItem): boolean => {
  const order = Number(feature.order);
  if (!isNumber(order)) {
    return false;
  }

  if (feature.type === "keyValue") {
    return isString(feature.key) && isString(feature.value);
  }

  if (feature.type === "text") {
    return isString(feature.text);
  }

  return false;
};

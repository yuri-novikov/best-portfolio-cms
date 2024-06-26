export const getStringValue = (data: FormData, fieldName: string): string => {
  const value = data.get(fieldName)?.valueOf();
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Invalid ${fieldName}`);
  }

  return value;
};

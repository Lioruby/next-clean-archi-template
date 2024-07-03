export const extractErrorMessage = (e: unknown): string => {
  if (e instanceof Error && e.message) {
    return e.message;
  }

  return "Unknown error";
};

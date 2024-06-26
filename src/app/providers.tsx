"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "var(--font-open-sans)",
  },
  styles: {
    global: () => ({
      body: {
        bg: "orange.50",
        color: "gray.700",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

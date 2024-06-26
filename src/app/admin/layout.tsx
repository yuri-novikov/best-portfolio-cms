import { NavLink } from "@/src/components/NavLink";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container maxW="container.lg">
      <HStack py={2}>
        <Flex gap={2}>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/cases">Cases</NavLink>
          <NavLink href="/admin/tags">Tags</NavLink>
        </Flex>
        <Flex ml="auto">
          <NavLink href="/">Exit</NavLink>
        </Flex>
      </HStack>
      <Container mt={4} maxW="container.md">
        {children}
      </Container>
    </Container>
  );
}

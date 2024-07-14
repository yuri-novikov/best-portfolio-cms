import prisma from "@/db";
import {
  Box,
  Container,
  Divider,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Portfolio } from "../components/Portfolio/Portfolio";

export default async function Home() {
  const cases = await prisma.case.findMany({
    include: {
      features: {
        orderBy: {
          order: "asc",
        },
      },
      tags: true,
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <Stack height={"100%"}>
      <header>
        {/* Header */}
        <Stack direction="row" alignItems={"center"} spacing={4} p={4}>
          <SkeletonCircle size="60px" />
          <Skeleton width="20%" height="48px" />
          <Skeleton width="20%" height="48px" />
          <Skeleton width="20%" height="48px" />
          <Skeleton width="20%" height="48px" />
        </Stack>
      </header>
      <main>
        {/* Hero */}
        <Stack>
          <Skeleton height="400px" />
        </Stack>
        {/* Portfolio */}
        <Container maxW="container.lg" p={4}>
          <Portfolio cases={cases} />
        </Container>
      </main>
      <Box mt="auto">
        <footer>
          {/* Footer */}
          <Divider />
          <Container maxW="container.md" p={4}>
            <Stack direction="row" spacing={16}>
              <Stack flex={1}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
              <Stack flex={1}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
              <Stack flex={1}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
              <Stack flex={1} alignItems={"center"}>
                <SkeletonCircle size="60px" />
                <Skeleton height="20px" width={"100px"} />
              </Stack>
            </Stack>
          </Container>
        </footer>
      </Box>
    </Stack>
  );
}

import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Settings() {
  return (
    <main>
      <Heading mb={8}>Dashboard</Heading>

      <Grid gap={4} gridTemplate={"1fr / auto 1fr"}>
        <GridItem alignContent={"center"}>
          <Heading size={"md"}>Check Cases:</Heading>
        </GridItem>
        <GridItem>
          <Button as={NextLink} href="/admin/cases" minW={"300px"}>
            To Cases Page
          </Button>
        </GridItem>

        <GridItem alignContent={"center"}>
          <Heading size={"md"}>Create a new Case:</Heading>
        </GridItem>
        <GridItem>
          <Button as={NextLink} href="/admin/cases/new" minW={"300px"}>
            To Case Create Page
          </Button>
        </GridItem>

        <GridItem alignContent={"center"}>
          <Heading size={"md"}>Add or Edit Tags:</Heading>
        </GridItem>
        <GridItem>
          <Button as={NextLink} href="/admin/tags" minW={"300px"}>
            To Tags Page
          </Button>
        </GridItem>

        <GridItem my={4}></GridItem>
        <GridItem my={4}></GridItem>

        <GridItem alignContent={"center"}>
          <Heading size={"md"}>Check Home Page:</Heading>
        </GridItem>
        <GridItem>
          <Button as={NextLink} href="/" minW={"300px"}>
            To Home Page
          </Button>
        </GridItem>
      </Grid>
    </main>
  );
}

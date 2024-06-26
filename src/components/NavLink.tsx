"use client";

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      px={6}
      py={2}
      fontWeight={"bold"}
      as={NextLink}
      href={href}
      letterSpacing={1.25}
      borderRadius={24}
      textTransform={"uppercase"}
      bg={pathname === href ? "blue.100" : "transparent"}
      _hover={{
        textDecoration: "none",
        bg: "blue.200",
      }}
    >
      {children}
    </Link>
  );
};

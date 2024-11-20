"use client";
import { COLORS } from "@/constants/colors";
import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  Button,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  VStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useContext, useMemo, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useScreenUtil } from "@/context/ScreenUtilContext";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  const color = isActive ? COLORS.GREEN : COLORS.GRAY;

  return (
    <Link
      href={href}
      color={color}
      fontWeight="bold"
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
    >
      {label}
    </Link>
  );
};

const DropdownItem = ({ label }: { label: string }) => {
  return (
    <MenuItem
      _hover={{
        color: COLORS.GREEN,
      }}
      color={COLORS.GRAY}
      value={label}
      fontWeight={"bold"}
    >
      {label}
    </MenuItem>
  );
};

const Header = () => {
  const [displayProducts, setDisplayProducts] = useState(false);
  const [displayMobileHeader, setDisplayMobileHeader] = useState(false);
  const { isMobileView } = useScreenUtil();

  return (
    <Stack
      zIndex={1000}
      position={"fixed"}
      width={"100%"}
      direction={isMobileView ? "column" : "row"}
      alignItems={"center"}
      gap={5}
      flex={1}
      bg="white"
      p={4}
      px={10}
      borderBottomWidth={1}
    >
      <Image src="./logo/gebme.png" alt="Logo" width={100} />
      <Stack
        gap={6}
        alignItems={"center"}
        display={
          (isMobileView && displayMobileHeader) || !isMobileView
            ? "flex"
            : "none"
        }
        direction={isMobileView ? "column" : "row"}
      >
        <NavLink href="/home" label="Home" />
        <VStack align="start" position="relative">
          <MenuRoot open={displayProducts}>
            <MenuTrigger
              onMouseEnter={() => setDisplayProducts(true)}
              onMouseLeave={() => setDisplayProducts(false)}
              _hover={{
                color: COLORS.GREEN,
                outline: "none",
              }}
              outline={"none"}
              fontWeight="bold"
              color={displayProducts ? COLORS.GREEN : COLORS.GRAY}
            >
              <HStack>
                <Text>Products</Text>
                {displayProducts ? <FaAngleUp /> : <FaAngleDown />}
              </HStack>
            </MenuTrigger>
            <MenuContent
              onMouseEnter={() => setDisplayProducts(true)}
              onMouseLeave={() => setDisplayProducts(false)}
              top="100%"
              left="0"
              position={"absolute"}
            >
              <DropdownItem label="Point of Sales" />
              <DropdownItem label="QR Ordering" />
              <DropdownItem label="Online Ordering" />
              <DropdownItem label="Reward Program" />
              <DropdownItem label="Payment" />
            </MenuContent>
          </MenuRoot>
        </VStack>
        <NavLink href="/about" label="About Us" />
        <NavLink href="/merchant" label="Merchant" />
        <NavLink href="/contact" label="Contact" />
      </Stack>
      <HStack
        display={
          (isMobileView && displayMobileHeader) || !isMobileView
            ? "flex"
            : "none"
        }
        flex={1}
        justifyContent={"flex-end"}
      >
        <Box>
          <Button
            flex={1}
            fontWeight={"bold"}
            background={"white"}
            color={COLORS.GREEN}
            _hover={{
              background: "ButtonHighlight",
            }}
            style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: COLORS.GREEN,
            }}
          >
            Request Demo
          </Button>
        </Box>
      </HStack>

      {displayMobileHeader && isMobileView && (
        <ImCross
          size={20}
          color={COLORS.GRAY}
          onClick={() => {
            setDisplayMobileHeader(!displayMobileHeader);
          }}
          style={{
            display: isMobileView ? "flex" : "none",
            position: "absolute",
            right: 20,
            top: 20,
            cursor: "pointer",
          }}
        />
      )}
      {!displayMobileHeader && isMobileView && (
        <RxHamburgerMenu
          color={COLORS.GRAY}
          onClick={() => {
            setDisplayMobileHeader(!displayMobileHeader);
          }}
          size={25}
          style={{
            display: isMobileView ? "flex" : "none",
            position: "absolute",
            right: 20,
            top: 20,
            cursor: "pointer",
          }}
        />
      )}
    </Stack>
  );
};

export default Header;

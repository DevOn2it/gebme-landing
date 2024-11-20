"use client";
import { COLORS } from "@/constants/colors";
import {
  Button,
  HStack,
  Image,
  Input,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { FaAngleDown, FaICursor } from "react-icons/fa";

const frameworks = createListCollection({
  items: [
    { label: "Food & Beverage", value: "Food & Beverage" },
    { label: "Beauty & Wellness", value: "Beauty & Wellness" },
    { label: "Retail", value: "Retail" },
    { label: "Clothes", value: "Clothes" },
    { label: "Others", value: "Others" },
  ],
});

export const Introduction6 = () => {
  return (
    <HStack width={"100%"} p={20} gap={5}>
      <VStack
        width={{
          md: "50%",
          sm: "100%",
        }}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"} fontSize={36}>
          Schedule a free demo today.
        </Text>
        <Text mb={5}>Just provide us with your information.</Text>
        <VStack width={"100%"} gap={4}>
          <Input placeholder="Full name" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Phone number" type="tel" />
          <Input placeholder="Address" type="text" />
          <Input placeholder="Business name" />
          <SelectRoot collection={frameworks} size="sm" width="100%">
            <SelectTrigger>
              <SelectValueText placeholder="Please select a merchant type" />
              <FaAngleDown size={20} />
            </SelectTrigger>
            <SelectContent>
              {frameworks.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <Button width={"100%"} backgroundColor={COLORS.GREEN}>
            Submit
          </Button>
        </VStack>
      </VStack>
      <VStack
        width={"50%"}
        display={{
          md: "flex",
          sm: "none",
        }}
      >
        <Image src="./pos.jpeg" borderRadius={8} />
      </VStack>
    </HStack>
  );
};

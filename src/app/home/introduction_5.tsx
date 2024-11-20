import { COLORS } from "@/constants/colors";
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { IoMdStar } from "react-icons/io";

const ITEMS = [
  {
    imagePath: "./logo/BGP.png",
    review:
      "Gebme POS has transformed how we operate at BGP Kitchen. Managing orders, inventory, and payments from one system has simplified our workflow, allowing us to focus on serving our customers.",
  },
  {
    imagePath: "./logo/Ah_Dan_Lok_Lok.png",
    review:
      "Gebme POS is perfect for our food truck—fast, reliable, and saves us 3x on annual fees!",
  },
  {
    imagePath: "./logo/Asam_Ramen.png",
    review:
      "Gebme POS keeps our stall running smoothly with instant order processing and stock alerts. It's the perfect tool for small businesses like ours!",
  },
  {
    imagePath: "./logo/Easy_Way_Cafe.png",
    review:
      "Gebme POS makes our ordering process faster and smoother, and the insights help us improve our menu and service!",
  },
];

export const Introduction5 = () => {
  return (
    <VStack width={"100%"} p={20} gap={20}>
      <VStack>
        <Text fontWeight={"bold"} fontSize={64}>
          Our Clients
        </Text>
        <Text>Your business is our upmost priority</Text>
      </VStack>
      <Stack
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"flex-start"}
        direction={{
          md: "row",
          sm: "column",
        }}
      >
        {ITEMS.map((item, index) => {
          return (
            <VStack
              key={index}
              width={{
                md: "20%",
                sm: "100%",
              }}
            >
              <Image src={item.imagePath} alt="Logo" width={100} />
              <HStack mb={5}>
                <IoMdStar size={25} color={COLORS.GOLD} />
                <IoMdStar size={25} color={COLORS.GOLD} />
                <IoMdStar size={25} color={COLORS.GOLD} />
                <IoMdStar size={25} color={COLORS.GOLD} />
                <IoMdStar size={25} color={COLORS.GOLD} />
              </HStack>
              <Text textAlign={"justify"} fontSize={16}>
                {item.review}
              </Text>
            </VStack>
          );
        })}
      </Stack>
    </VStack>
  );
};

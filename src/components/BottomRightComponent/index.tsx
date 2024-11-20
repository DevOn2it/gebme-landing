"use client";
import { COLORS } from "@/constants/colors";
import { Box, VStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BottomRightComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <VStack
      position={"fixed"}
      zIndex={1000}
      right={0}
      bottom={0}
      margin={5}
      gap={4}
    >
      <Box
        width={"100%"}
        aspectRatio={1}
        background={COLORS.GREEN}
        display={isVisible ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={3}
        cursor={"pointer"}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        _hover={{
          background: "ButtonHighlight",
        }}
      >
        <FaArrowUp color="white" size={14} />
      </Box>

      <Image
        alignSelf={"flex-start"}
        src="./logo/whatsapp.png"
        alt="Logo"
        width={35}
        cursor={"pointer"}
        onClick={() => {
          const url =
            "https://api.whatsapp.com/send/?phone=601162800314&text=Hi%2C+I+would+like+to+know+more+about+GEBME&type=phone_number&app_absent=0";
          window.open(url);
        }}
      />
    </VStack>
  );
};

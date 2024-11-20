"use client";
import { useScreenUtil } from "@/context/ScreenUtilContext";
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    title: "Uninterrupted Services",
    description: "Real-time or offline to support business.",
    imagePath: "./Seamless_Operation.png",
  },
  {
    title: "Inventory Management",
    description:
      "To track stock levels and automatically update when items are sold.",
    imagePath: "./Instant_Ordering.png",
  },
  {
    title: "Operational Efficiency",
    description: "Reduces serve workload, improving customer services.",
    imagePath: "./Operational_Efficiency.png",
  },
  {
    title: "Sales Report",
    description: "Check your sales report anytime, anywhere.",
    imagePath: "./Order_Accuracy.png",
  },
  {
    title: "Reward Program",
    description: "Integrated loyalty to build up customer relationships.",
    imagePath: "./Preventing_Stockouts.png",
  },
  {
    title: "Online & QR Ordering",
    description:
      "Facillitates convenient and efficient purchasing of goods and services.",
    imagePath: "./Preventing_Stockouts.png",
  },
];

export const Introduction4 = () => {
  const vStackRef = useRef<HTMLDivElement | null>(null); // Ref for the VStack
  const [vStackHeight, setVStackHeight] = useState<number>(0); // State to store VStack height
  const { isMobileView } = useScreenUtil();
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === vStackRef.current) {
          setVStackHeight(entry.contentRect.height); // Update height on resize
        }
      }
    });

    if (vStackRef.current) {
      observer.observe(vStackRef.current);
    }

    return () => {
      if (vStackRef.current) {
        observer.unobserve(vStackRef.current);
      }
    };
  }, []);
  return (
    <Stack
      mt={-2}
      width={"100%"}
      paddingInline={30}
      direction={{
        md: "row",
        sm: "column",
      }}
      height={"100%"}
      alignItems={"center"}
      gap={5}
    >
      <Image
        order={isMobileView ? 1 : 2}
        src={"./contactless_payment.jpg"}
        alt="Logo"
        height={isMobileView ? "100%" : `${vStackHeight}px`}
        maxWidth={isMobileView ? "100%" : "50%"}
        objectFit="cover"
        borderRadius={12}
      />
      <VStack
        order={isMobileView ? 2 : 1}
        ref={vStackRef}
        width={{
          md: "50%",
          sm: "100%",
        }}
        gap={4}
        height={"100%"}
        alignItems={"flex-start"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={{
            lg: 30,
            md: 24,
            sm: 30,
          }}
        >
          Take a look at our POS's features!
        </Text>
        {ITEMS.map((item, index) => {
          return (
            <HStack key={index}>
              <Image mr={1} width={50} src={item.imagePath} alt="Logo" />
              <VStack alignItems={"flex-start"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{
                    xl: 18,
                    lg: 17,
                    md: 16,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={{
                    xl: 17,
                    lg: 14,
                    md: 12,
                  }}
                >
                  {item.description}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
    </Stack>
  );
};

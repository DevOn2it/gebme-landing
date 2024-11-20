import { VStack, Image, Text, HStack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";

export const Footer = () => {
  return (
    <VStack
      paddingX={{
        md: 40,
        sm: 10,
      }}
      paddingY={20}
    >
      <Image
        alignSelf={"flex-start"}
        src="./logo/gebme.png"
        alt="Logo"
        width={200}
      />
      <VStack width={"100%"} gap={10}>
        <HStack
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          gap={10}
        >
          <VStack alignItems={"flex-start"} flex={1}>
            <Text fontSize={24} fontWeight={"bold"}>
              GEBME SDN BHD
            </Text>
            <Text fontSize={14}>202401031620 (1577469-D)</Text>
            <Text fontSize={12}>
              10-29, Avenue Crest, Jalan Jubli Perak 22/1, Section 22, 40300
              Shah Alam, Selangor.
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"} flex={1}>
            <Text fontSize={24} fontWeight={"bold"}>
              Product
            </Text>
            <Text fontSize={12}>Payment</Text>
            <Text fontSize={12}>QR Ordering</Text>
            <Text fontSize={12}>Point of Sales</Text>
            <Text fontSize={12}>Reward Program</Text>
          </VStack>
        </HStack>
        <HStack
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          gap={10}
        >
          <VStack alignItems={"flex-start"} flex={1} gap={10}>
            <VStack>
              <Text fontSize={24} fontWeight={"bold"}>
                Contact Us
              </Text>
              <HStack>
                <FaFacebook size={25} />
                <FaWhatsapp size={25} />
                <FaInstagram size={25} />
                <FaLinkedin size={25} />
              </HStack>
            </VStack>
            <VStack>
              <Text fontSize={24} fontWeight={"bold"}>
                Our Location
              </Text>
              <HStack width={"100%"}>
                <Tooltip content={"Malaysia"}>
                  <Image src="./logo/malaysia.png" alt="Logo" width={25} />
                </Tooltip>
                <Tooltip content={"Thailand"}>
                  <Image src="./logo/thailand.png" alt="Logo" width={25} />
                </Tooltip>
                <Tooltip content={"Singapore"}>
                  <Image src="./logo/singapore.png" alt="Logo" width={25} />
                </Tooltip>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems={"flex-start"} flex={1}>
            <Text fontSize={24} fontWeight={"bold"}>
              Our Website
            </Text>
            <Text fontSize={12}>Home</Text>
            <Text fontSize={12}>Product</Text>
            <Text fontSize={12}>About Us</Text>
            <Text fontSize={12}>Merchant</Text>
            <Text fontSize={12}>Contact Us</Text>
            <Text fontSize={12}>News</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

"use client";
import { COLORS } from "@/constants/colors";
import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Introduction = () => {
  const ref = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <Box
        onClick={() => {
          ref.current?.swiper.slidePrev();
        }}
        cursor={"pointer"}
        display={{
          lg: "flex",
          md: "flex",
          sm: "none",
        }}
        position={"absolute"}
        bottom={"50%"}
        left={10}
        zIndex={1000}
      >
        <FaChevronLeft size={20} />
      </Box>
      <Box
        onClick={() => {
          ref.current?.swiper.slideNext();
        }}
        cursor={"pointer"}
        display={{
          lg: "flex",
          md: "flex",
          sm: "none",
        }}
        position={"absolute"}
        bottom={"50%"}
        right={10}
        zIndex={1000}
      >
        <FaChevronRight size={20} />
      </Box>

      <SwiperSlide>
        <VStack
          height={"100%"}
          width={"100%"}
          bgSize={"cover"}
          bgImage="url('./introduction.png')"
          justifyContent={"center"}
          pt={10}
        >
          <Stack
            direction={{
              lg: "row",
              md: "column",
              sm: "column",
            }}
            paddingX={{
              md: 100,
              sm: 5,
            }}
            alignItems={"center"}
          >
            <VStack
              width={{
                lg: "50%",
                md: "75%",
                sm: "100%",
              }}
              alignItems={"flex-start"}
              gap={8}
            >
              <VStack alignItems={"flex-start"}>
                <Text
                  fontSize={{
                    xl: 35,
                    md: 30,
                    sm: 20,
                  }}
                  fontWeight={"bold"}
                >
                  Our POS Technology,
                </Text>
                <Text
                  fontSize={{
                    xl: 35,
                    md: 30,
                    sm: 20,
                  }}
                  fontWeight={"bold"}
                >
                  Built for F&B Success
                </Text>
              </VStack>
              <VStack>
                <Text
                  fontSize={{
                    xl: 20,
                    md: 18,
                    sm: 16,
                  }}
                >
                  F&B businesses trust Gebme for complete POS and Online/Offline
                  Ordering solutions—so you can focus on restaorants service
                  while we handle the tech.
                </Text>
              </VStack>
              <Button backgroundColor={COLORS.GREEN} fontWeight={"bold"}>
                Learn more
              </Button>
            </VStack>
            <Image
              src="./hardware.png"
              alt="Logo"
              height={{
                xl: 400,
                md: 320,
                sm: 320,
              }}
            />
          </Stack>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <VStack
          height={"100%"}
          width={"100%"}
          bgSize={"cover"}
          bgImage="url('./introduction.png')"
          justifyContent={"center"}
          pt={10}
        >
          <Stack
            direction={{
              lg: "row",
              md: "column",
              sm: "column",
            }}
            paddingX={{
              md: 100,
              sm: 5,
            }}
            alignItems={"center"}
          >
            <VStack
              width={{
                lg: "50%",
                md: "75%",
                sm: "100%",
              }}
              alignItems={"flex-start"}
              gap={8}
            >
              <VStack alignItems={"flex-start"}>
                <Text
                  fontSize={{
                    xl: 35,
                    md: 30,
                    sm: 20,
                  }}
                  fontWeight={"bold"}
                >
                  Our POS Technology,
                </Text>
                <Text
                  fontSize={{
                    xl: 35,
                    md: 30,
                    sm: 20,
                  }}
                  fontWeight={"bold"}
                >
                  Built for F&B Success
                </Text>
              </VStack>
              <VStack>
                <Text
                  fontSize={{
                    xl: 20,
                    md: 18,
                    sm: 16,
                  }}
                >
                  F&B businesses trust Gebme for complete POS and Online/Offline
                  Ordering solutions—so you can focus on restaorants service
                  while we handle the tech.
                </Text>
              </VStack>
              <Button backgroundColor={COLORS.GREEN} fontWeight={"bold"}>
                Learn more
              </Button>
            </VStack>
            <Image
              src="./hardware.png"
              alt="Logo"
              height={{
                xl: 400,
                md: 320,
                sm: 320,
              }}
            />
          </Stack>
        </VStack>
      </SwiperSlide>
    </Swiper>
  );
};

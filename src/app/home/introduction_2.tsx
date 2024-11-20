"use client";
import { useScreenUtil } from "@/context/ScreenUtilContext";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const DesktopView = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const firstImageRef = useRef<HTMLImageElement | null>(null);
  const secondImageRef = useRef<HTMLImageElement | null>(null);
  const thirdImageRef = useRef<HTMLImageElement | null>(null);
  const forthImageRef = useRef<HTMLImageElement | null>(null);
  const [text, setText] = useState({
    title: "",
    description: "",
  });
  const [firstImageHeight, setFirstImageHeight] = useState<number>(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === firstImageRef.current) {
          setFirstImageHeight(entry.contentRect.height); // Update parent height
        }
      }
    });

    if (firstImageRef.current) {
      resizeObserver.observe(firstImageRef.current); // Observe the parent
    }

    // Cleanup the observer
    return () => {
      if (firstImageRef.current) {
        resizeObserver.unobserve(firstImageRef.current);
      }
    };
  }, []);

  // Intersection Observer for detecting image visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target) {
              case firstImageRef.current: {
                setText({
                  title: "Coffee Shop",
                  description:
                    "Perfect POS for your cozy café, streamlining orders and payments with ease.",
                });
                break;
              }
              case secondImageRef.current: {
                setText({
                  title: "Food Truck",
                  description:
                    "Fast, mobile POS to keep your food truck running smoothly on the go.",
                });
                break;
              }
              case thirdImageRef.current: {
                setText({
                  title: "Hawkers / Food Stall",
                  description:
                    "Effortless POS for your stall, speeding up service and enhancing customer experience.",
                });
                break;
              }
              case forthImageRef.current: {
                setText({
                  title: "Restaurant",
                  description:
                    "Comprehensive POS solution for restaurants to manage orders, payments, and operations effortlessly.",
                });
                break;
              }
              default: {
                setText({
                  title: "Built for All F&B Businesses",
                  description:
                    "From Hawkers and Food Trucks to Cafés and Restaurants.",
                });
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the image is in view
    );

    // Observe all images
    firstImageRef.current && observer.observe(firstImageRef.current);
    secondImageRef.current && observer.observe(secondImageRef.current);
    thirdImageRef.current && observer.observe(thirdImageRef.current);
    forthImageRef.current && observer.observe(forthImageRef.current);

    return () => {
      // Cleanup the observer
      firstImageRef.current && observer.unobserve(firstImageRef.current);
      secondImageRef.current && observer.unobserve(secondImageRef.current);
      thirdImageRef.current && observer.unobserve(thirdImageRef.current);
      forthImageRef.current && observer.unobserve(forthImageRef.current);
    };
  }, []);

  return (
    <HStack alignItems="start" width="100%" mt={-2}>
      {/* Sticky */}
      <VStack
        width="50%"
        top={viewportHeight / 2}
        position="sticky"
        marginBlock={viewportHeight / 2}
        paddingInline={20}
      >
        <Text fontWeight={"bold"} fontSize={30}>
          {text.title}
        </Text>
        <Text fontStyle={"italic"}>{text.description}</Text>
      </VStack>

      {/* Scrollable */}
      <VStack width="50%" marginBlock={viewportHeight / 2} gap={200}>
        <Image
          src="./Coffee_Shop_Icon.png"
          alt="Logo"
          width={500}
          ref={firstImageRef}
          mt={-(firstImageHeight / 2)}
        />
        <Image
          src="./Food_Truck_Icon.png"
          alt="Logo"
          width={500}
          ref={secondImageRef}
        />
        <Image
          src="./Hawkers_Icon.png"
          alt="Logo"
          width={500}
          ref={thirdImageRef}
        />
        <Image
          src="./Restaurant_Icon.png"
          alt="Logo"
          width={500}
          ref={forthImageRef}
          mb={-(firstImageHeight / 2)}
        />
      </VStack>
    </HStack>
  );
};

const ITEMS = [
  {
    title: "Coffee Shop",
    description:
      "Perfect POS for your cozy café, streamlining orders and payments with ease.",
    imagePath: "./Coffee_Shop_Icon.png",
  },
  {
    title: "Food Truck",
    description:
      "Fast, mobile POS to keep your food truck running smoothly on the go.",
    imagePath: "./Food_Truck_Icon.png",
  },
  {
    title: "Hawkers / Food Stall",
    description:
      "Effortless POS for your stall, speeding up service and enhancing customer experience.",
    imagePath: "./Hawkers_Icon.png",
  },
  {
    title: "Restaurant",
    description:
      "Comprehensive POS solution for restaurants to manage orders, payments, and operations effortlessly.",
    imagePath: "./Restaurant_Icon.png",
  },
];

const MobileView = () => {
  return (
    <VStack mt={-2} padding={10}>
      {ITEMS.map((item, index) => {
        return (
          <VStack key={index}>
            <Image src={item.imagePath} alt="Logo" width={500} />
            <Text fontWeight={"bold"} fontSize={30}>
              {item.title}
            </Text>
            <Text fontStyle={"italic"}>{item.description}</Text>
          </VStack>
        );
      })}
    </VStack>
  );
};

export const Introduction2 = () => {
  const { isMobileView } = useScreenUtil();

  return <>{isMobileView ? <MobileView /> : <DesktopView />}</>;
};

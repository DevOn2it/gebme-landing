import { VStack } from "@chakra-ui/react";
import { Introduction } from "./introduction";
import { Introduction2 } from "./introduction_2";
import { Introduction3 } from "./introduction_3";
import { Introduction4 } from "./introduction_4";

const Page = () => {
  return (
    <VStack>
      <Introduction />
      <Introduction2 />
      <Introduction3 />
      <Introduction4 />
    </VStack>
  );
};

export default Page;

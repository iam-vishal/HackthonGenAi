import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import { Radio, RadioGroup, useRadio } from "@chakra-ui/radio";
import React, { useState, useEffect } from "react";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import {
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  useRadioGroup,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import RadioCard from "./radio";

export default function ThirdStep({ audianceData }) {
  const [campaignBudget, setCampaignBudget] = React.useState(30);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [gender, setGender] = useState(
    audianceData?.gender == "all" || "both" ? "all" : audianceData?.gender
  );
  const [minAge, setMinAge] = useState(audianceData?.age_range?.split("-")[0]);
  const [maxAge, setMaxAge] = useState(audianceData?.age_range?.split("-")[1]);

  useEffect(() => {
    // setMinAge(audianceData?age_range?.split("-")[0]);
    // setMinAge(audianceData?age_range?.split("-")[1]);
    console.log("sdfghjk===" + audianceData?.age_range);
  }, []);

  //   console.log(audianceData?.split("-")[0]);

  return (
    <Flex
      direction={"column"}
      align={"start"}
      width={"100%"}
      p={30}
      overflowY={"auto"}
    >
      <Text
        fontSize={"2xl"}
        width={"100%"}
        align={"center"}
        fontWeight={"bold"}
      >
        Audience Details
      </Text>
      <Flex gap={"40px"} direction={"column"} px={40} width={"100%"}>
        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Audience Locations</Text>
          <Box
            border={"1px"}
            borderRadius={5}
            bgColor={"whiteAlpha.0"}
            width={"100%"}
          >
            <HStack p={"1.5"} wrap={"wrap"} spacing={4}>
              {audianceData?.location?.map((city) => (
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="brand"
                >
                  <TagLabel>{city}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </HStack>
          </Box>
        </Flex>

        {/* <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Creator Keywords</Text>
          <Box
            border={"1px"}
            borderRadius={5}
            bgColor={"whiteAlpha.0"}
            width={"100%"}
          >
            <HStack p={"1.5"} wrap={"wrap"} spacing={4}>
              {[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3].map((e) => (
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="brand"
                >
                  <TagLabel>#tags</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </HStack>
          </Box>
        </Flex> */}

        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Audiance Gender</Text>
          <RadioGroup onChange={setGender} colorScheme="brand" value={gender}>
            <Stack direction="row">
              <Radio value="all">Both</Radio>
              <Radio ms={5} value="male">
                Male
              </Radio>
              <Radio ms={5} value="female">
                Female
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Audiance Age Range</Text>
          <HStack align={"end"}>
            <Input
              type="number"
              width={20}
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
            ></Input>{" "}
            <Text> _ </Text>
            <Input
              type="number"
              width={20}
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
            ></Input>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

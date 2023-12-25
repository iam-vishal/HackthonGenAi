import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup, useRadio } from "@chakra-ui/radio";
import React, { useState, useEffect } from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { Tooltip } from "@chakra-ui/tooltip";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";

export default function SecondStep({ creatorData }) {
  const [campaignBudget, setCampaignBudget] = React.useState(30);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [gender, setGender] = useState(
    creatorData?.gender == "all" || "both" ? "all" : creatorData?.gender
  );
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
        Creator Details
      </Text>
      <Flex gap={"20px"} direction={"column"} px={40} width={"100%"}>
        {/* <FormControl>
          <FormLabel>Creator category</FormLabel>
          <Select placeholder="Creator Category" value={"food"}>
            <option value={"food"}>Food</option>
            <option value={"sports"}>Sports</option>
            <option value={"tech"}>Tech</option>
            <option value={"entertainment"}>Entertainment</option>
            <option value={"music"}>Music</option>
          </Select>
        </FormControl> */}
        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Creator category</Text>
          <Box
            border={"1px"}
            borderRadius={5}
            bgColor={"whiteAlpha.0"}
            width={"100%"}
          >
            <HStack p={"1.5"} wrap={"wrap"} spacing={4}>
              {creatorData?.genres?.map((category) => (
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="brand"
                >
                  <TagLabel>{category}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </HStack>
          </Box>
        </Flex>
        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Creator Location</Text>
          <Box
            border={"1px"}
            borderRadius={5}
            bgColor={"whiteAlpha.0"}
            width={"100%"}
          >
            <HStack p={"1.5"} wrap={"wrap"} spacing={4}>
              {creatorData?.location?.map((city) => (
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
              {creatorData?.location?.map((location) => (
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="brand"
                >
                  <TagLabel>{location}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </HStack>
          </Box>
        </Flex> */}

        <Flex direction={"column"} align={"start"} width={"100%"}>
          <Text>Creator Gender</Text>
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
      </Flex>
    </Flex>
  );
}

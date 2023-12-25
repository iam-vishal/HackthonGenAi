import { Box, Flex, Text } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
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

export default function FirstStep() {
  const [campaignBudget, setCampaignBudget] = React.useState(20);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [campaignType, setCampaignType] = React.useState("");
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"start"}
      gap={10}
      p={30}
      width={"100%"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Campaign Budget
      </Text>
      <Slider
        id="slider"
        defaultValue={campaignBudget}
        min={10}
        max={50}
        width={"70%"}
        colorScheme="teal"
        onChange={(v) => setCampaignBudget(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={10} mt="5" ml="0" fontSize="lg">
          10 Lakhs
        </SliderMark>
        <SliderMark value={20} mt="5" ml="-10" fontSize="lg">
          20 Lakhs
        </SliderMark>
        <SliderMark value={30} mt="5" ml="-10" fontSize="lg">
          30 Lakhs
        </SliderMark>
        <SliderMark value={40} mt="5" ml="-10" fontSize="lg">
          40 Lakhs
        </SliderMark>
        <SliderMark value={50} mt="5" ml="-10" fontSize="lg">
          50 Lakhs
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${campaignBudget}`}
        >
          <SliderThumb boxSize={4} />
        </Tooltip>
      </Slider>
      <Text
        fontSize={"8xl"}
        fontWeight={"bold"}
      >{`${campaignBudget} Lakhs`}</Text>
      <Box width={"60%"}>
        <FormControl>
          {/* <FormLabel>Creator category</FormLabel> */}
          <Select
            placeholder="Select Campaign type"
            value={campaignType}
            onChange={(e) => {
              setCampaignType(e.target.value);
            }}
          >
            <option value={"app_review"}>App Review</option>
            <option value={"product"}>Product Review</option>
            <option value={"reshare"}>Reshare</option>
            <option value={"others"}>Others</option>
          </Select>
        </FormControl>
      </Box>
    </Flex>
  );
}

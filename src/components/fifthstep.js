import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
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
import { Image } from "@chakra-ui/image";
import { Textarea } from "@chakra-ui/textarea";
import { Input } from "@chakra-ui/react";

export default function FifthStep({ contentData }) {
  const [campaignBudget, setCampaignBudget] = React.useState(30);
  const [caption, setcaption] = React.useState("");

  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"start"}
      pt={5}
      width={"100%"}
      overflowY={"auto"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Reference Contents
      </Text>

      <Box width={"80%"}>
        <Stack direction="row" justifyContent={"space-between"}>
          {contentData?.images?.map((img) => {
            return (
              <Image
                boxSize="150px"
                borderRadius="10px"
                objectFit="cover"
                src={img}
                alt="Dan Abramov"
              />
            );
          })}
        </Stack>
        <Text my={5}>Caption</Text>
        {/* {contentData?.captions?.map((caption) => {
          return (
            <Input
              mb={5}
              value={
                <Input
                  mb={5}
                  value={caption}
                  // onChange={(e) => setcaption(e.target.value)}
                  placeholder="Recommened Caption"
                  size="md"
                  isDisabled
                />
              }
              // onChange={(e) => setcaption(e.target.value)}
              placeholder="Recommened Caption"
              size="md"
              isDisabled
            />
          );
        })} */}
        <Input
          mb={5}
          value={contentData?.captions[0]}
          // onChange={(e) => setcaption(e.target.value)}
          placeholder="Recommened Caption"
          size="md"
          // isDisabled
        />
        {/* <Input
          value={caption}
          onChange={(e) => setcaption(e.target.value)}
          placeholder="Recommened Caption"
          size="md"
          isDisabled
        /> */}
        <Text my={5}>Campaign Breif</Text>
        <Text align={"start"} mt={5}>
          {contentData?.campaign_brief}
        </Text>
      </Box>
    </Flex>
  );
}

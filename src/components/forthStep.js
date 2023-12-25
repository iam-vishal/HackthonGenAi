import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
import React, { useState, useEffect } from "react";

import { Input, useRadioGroup } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import RadioCard from "./radio";
import { Divider } from "@chakra-ui/react";

export default function ForthStep({ plansData }) {
  const options = ["High Reach", "High Impressions", "High Engegment"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "High Reach",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <Flex direction={"column"} pt={10} pr={10} align={"end"} width={"100%"}>
      <Box w={"100%"} mb={5}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Recommended Plans
        </Text>
      </Box>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <HStack mt={10}>
        <VStack mx={5} align={"start"} width={"200px"}>
          <Text>Expected Views</Text>

          <Text>ER%</Text>

          <Text>CPV Range</Text>
          <Text>Number of Creators</Text>
        </VStack>
        <VStack mx={5} width={"200px"}>
          <Text>{plansData[0].Expected_Views}</Text>
          <Text>{plansData[0].ER}</Text>
          <Text>{plansData[0].CPV}</Text>
          <Text>{plansData[0].Number_of_creators}</Text>
        </VStack>
        <VStack mx={5} width={"200px"}>
          <Text>{plansData[1].Expected_Views}</Text>
          <Text>{plansData[1].ER}</Text>
          <Text>{plansData[1].CPV}</Text>
          <Text>{plansData[1].Number_of_creators}</Text>
        </VStack>
        <VStack mx={5} width={"200px"}>
          <Text>{plansData[2].Expected_Views}</Text>
          <Text>{plansData[2].ER}</Text>
          <Text>{plansData[2].CPV}</Text>
          <Text>{plansData[2].Number_of_creators}</Text>
        </VStack>
      </HStack>
    </Flex>
  );
}

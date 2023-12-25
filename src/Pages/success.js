import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import sucess from "../Logo/sucess.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Button,
  Switch,
  Box,
  Flex,
  Input,
  Text,
  AlertIcon,
  FormControl,
  Select,
  Textarea,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

function Success() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [brand, setBrand] = useState("");
  const [prompt, setPrompt] = useState("");

  //   const handleNavigate = () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       navigate("/planner");
  //     }, 5000);
  //   };

  return (
    <>
      <Box w="100%" h="90vh">
        <Flex
          w="100%"
          h="100%"
          gap={5}
          direction={"column"}
          align="center"
          justify="center"
        >
          <Box width={300} height={300}>
            <Lottie
              animationData={sucess} // Pass in your Lottie JSON data
              loop={true} // Set to true if you want the animation to loop
              autoplay={true} // Set to true if you want the animation to play when mounted
            />
          </Box>
          <Text fontStyle={"italic"} fontSize={32}>
            Campaign Created Sussecfully
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Success;

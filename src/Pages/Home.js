import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import loader from "../Logo/loader.json";
import kgl from "../Logo/kof_google_logo.png";
import toolLogo from "../Logo/tool_logo.png";
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
  Image,
} from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [brand, setBrand] = useState("dominos");
  const [prompt, setPrompt] = useState("");
  const [showLogo, setShowLogo] = useState(true);

  const handleNavigate = () => {
    setIsLoading(true);

    if (prompt != "") {
      setTimeout(() => {
        setIsLoading(false);
        createCustomprompt();
        navigate("/planner");
      }, 5000);
    } else
      setTimeout(() => {
        setIsLoading(false);
        navigate("/planner");
      }, 5000);
  };

  console.log(prompt);
  useEffect(() => {
    localStorage.setItem("brand", "dominos");
    setTimeout(() => {
      setShowLogo(false);
    }, 5000);
  }, []);

  const createCustomprompt = async () => {
    try {
      const apiUrl = `https://staging-api-ocb.kofluence.com/campaign/hackathon/${brand}/v1/campaign-plan-creation`;

      const response = await axios.post(
        apiUrl,
        {
          prompt_content: prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Data successfully posted:", response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      {!isLoading ? (
        <Box w="100%" h="100vh" overflowY={"hidden"}>
          <Flex
            w="100%"
            h="100%"
            gap={50}
            direction={"column"}
            align="center"
            justify="center"
          >
            {showLogo ? (
              <>
                <Image
                  boxSize="400px"
                  borderRadius="10px"
                  objectFit="contain"
                  src={kgl}
                  alt="logo"
                />
              </>
            ) : (
              <>
                {/* <Image
                  boxSize="400px"
                  borderRadius="10px"
                  objectFit="contain"
                  src={toolLogo}
                  alt="logo"
                ></Image> */}
                <Text fontSize={72} fontWeight={"bold"}>
                  camp<span style={{ color: "#FFBF00" }}>AI</span>gn
                </Text>

                <Textarea
                  mb={5}
                  width={"60%"}
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                  placeholder="Enter Prompt"
                  size="md"
                />
                <Box width={"30%"}>
                  <FormControl>
                    <Select
                      placeholder="Select Brand"
                      value={brand}
                      onChange={(e) => {
                        setBrand(e.target.value);
                        localStorage.setItem(
                          "brand",
                          e?.target?.value?.toString()
                        );
                      }}
                    >
                      <option value={"dominos"}>Dominos</option>
                      <option value={"caratlane"}>Caratlane</option>
                      <option value={"redbus"}>Red Bus</option>
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  size={"lg"}
                  colorScheme="brand"
                  variant="solid"
                  onClick={handleNavigate}
                >
                  Create Campaign
                </Button>
              </>
            )}
          </Flex>
        </Box>
      ) : (
        <Box w="100%" h="90vh">
          <Flex
            w="100%"
            h="100%"
            gap={30}
            direction={"column"}
            align="center"
            justify="center"
          >
            <Box width={300} height={300}>
              <Lottie
                animationData={loader} // Pass in your Lottie JSON data
                loop={true} // Set to true if you want the animation to loop
                autoplay={true} // Set to true if you want the animation to play when mounted
              />
            </Box>
            <Text fontStyle={"italic"} fontSize={"lg"}>
              Hang on Kofluence AI doing some Magic ...
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Home;

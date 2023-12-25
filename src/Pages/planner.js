import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import loader from "../Logo/loader.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import {
  Button,
  Box,
  Flex,
  Input,
  Text,
  Code,
  HStack,
  useRadioGroup,
} from "@chakra-ui/react";
import { Stack, Tooltip } from "react-bootstrap";
import RadioCard from "../components/radio";
import StatefulMultiSelect from "../components/multiSelect";
import FirstStep from "../components/firstStep";
import secondStep from "../components/firstStep";
import SecondStep from "../components/secondStep";
import ThirdStep from "../components/thirdStep";
import ForthStep from "../components/forthStep";
import FifthStep from "../components/fifthstep";
import axios from "axios";

function Planner() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [step, setStep] = useState(1);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [creatorData, setCreatorData] = useState({});
  const [audianceData, setAudianceData] = useState({});
  const [plansData, setPlansData] = useState([]);
  const [contentData, setContentData] = useState({});

  const getData = async () => {
    const creatorDetailUrl = `https://staging-api-ocb.kofluence.com/campaign/hackathon/${localStorage.getItem(
      "brand"
    )}/v1/creator/demographics_details`;
    const audianceDetailUrl = `https://staging-api-ocb.kofluence.com/campaign/hackathon/${localStorage.getItem(
      "brand"
    )}/v1/creator/audience/demographics_details`;
    const plansUrl = `https://staging-api-ocb.kofluence.com/campaign/hackathon/${localStorage.getItem(
      "brand"
    )}/v1/creator/brand-plan`;
    const contentUrl = `https://staging-api-ocb.kofluence.com/campaign/hackathon/${localStorage.getItem(
      "brand"
    )}/v1/creator/reference-content`;

    await axios
      .get(creatorDetailUrl)
      .then((response) => {
        console.log(response?.data?.results);
        // setIsLoading(false);
        setCreatorData(response?.data?.results);
      })
      .catch((err) => {
        // Handle errors
        // setIsLoading(false);
      });

    await axios
      .get(audianceDetailUrl)
      .then((response) => {
        console.log(response?.data?.results);
        setAudianceData(response?.data?.results);
        setIsLoading(false);
      })
      .catch((err) => {
        // Handle errors
        // setError(err);
        setIsLoading(false);
      });
    await axios
      .get(plansUrl)
      .then((response) => {
        console.log(response?.data?.results);
        setPlansData(response?.data?.results);
        // setIsLoading(false);
      })
      .catch((err) => {
        // Handle errors
        // setError(err);
        setIsLoading(false);
      });
    await axios
      .get(contentUrl)
      .then((response) => {
        console.log(response?.data?.results);
        setContentData(response?.data?.results);
        // setIsLoading(false);
      })
      .catch((err) => {
        // Handle errors
        // setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []); //

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const confirmCampign = () => {
    navigate("/success");
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5000);
  //   }, []);

  return (
    <>
      {!isLoading ? (
        <Box w="100%" h="100vh" overflowY={"hidden"}>
          <Flex
            w="100%"
            h="100%"
            direction={"column"}
            align="center"
            justify="center"
          >
            <p style={{ fontSize: 20, fontWeight: "bold" }}>
              Kofluence Campaign Recommendations Powered by GenAI
              <span style={{ fontSize: 10 }}>
                {" "}
                (Edit according to your need)
              </span>
            </p>
            <Box
              width={"70%"}
              height={"70%"}
              borderRadius={20}
              bgColor={"whiteAlpha.300"}
              align="center"
              justify="center"
            >
              <Flex
                width={"100%"}
                height={"100%"}
                //   align="center"
                //   justify="center"
              >
                {step == 1 ? (
                  <FirstStep />
                ) : step == 2 ? (
                  <SecondStep creatorData={creatorData} />
                ) : step == 3 ? (
                  <ThirdStep audianceData={audianceData} />
                ) : step == 4 ? (
                  <ForthStep plansData={plansData} />
                ) : (
                  <FifthStep contentData={contentData} />
                )}
                <HStack>
                  <Button
                    position={"fixed"}
                    bottom={38}
                    left={"18%"}
                    colorScheme="brand"
                    onClick={handlePrev}
                    style={{ display: step == 1 ? "none" : "" }}
                  >
                    Previous
                  </Button>
                  <Button
                    position={"fixed"}
                    bottom={38}
                    right={"18%"}
                    colorScheme="brand"
                    onClick={handleNext}
                    style={{ display: step >= 5 ? "none" : "" }}
                  >
                    Move Forward
                  </Button>
                  <Button
                    position={"fixed"}
                    bottom={38}
                    right={"18%"}
                    colorScheme="brand"
                    onClick={confirmCampign}
                    style={{ display: step >= 5 ? "" : "none" }}
                  >
                    Confirm Campaign
                  </Button>
                </HStack>
              </Flex>
            </Box>
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
              Campaign is Almost Ready ...
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Planner;

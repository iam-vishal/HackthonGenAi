import { Box } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";

export default function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        mx={5}
        width={"200px"}
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

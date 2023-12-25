import { extendTheme } from "@chakra-ui/react";

const brandColor = "#008080"; // Replace with your brand color hex code

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#E6FFFA", // Lightest shade
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795", // Primary brand color (teal)
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044", // Darkest shade
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
});

export default customTheme;

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./Router/Route";
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

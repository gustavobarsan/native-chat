import { Box, Center, NativeBaseProvider, Button } from "native-base";
import { Platform } from "react-native";
import { LinearGradient } from "react-native-svg";

const App = () => {
  return (
    <>
      <Box alignItems="center" bgColor={"red.200"} width={"80%"} height={"80%"}>
        <Box margin={"6"} bgColor={"blue.100"} width={"90%"} height={"90%"}>
          <Box height={"70%"} bgColor={"amber.100"}></Box>
          <Box height={"30%"} justifyContent={"space-around"}>
            <Button>Botão 1</Button>
            {Platform.OS === "web" ? (
              <Button>Botão Web</Button>
            ) : (
              <Button>Botão Mobile</Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  );
};

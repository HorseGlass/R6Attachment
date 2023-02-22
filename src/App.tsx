import { Box, Container, Text, Select, Tab, TabList, TabPanel, TabPanels, Tabs, HStack, Button, useColorMode, Center, VStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { Seasons } from "./data";
import ByWeapon from "./ByWeapon";
import ByOperator from "./ByOperator";

const App = () => {
  const [season, setSeason] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW={"container.lg"}>
        <Tabs isFitted mt={4} colorScheme="yellow">
          <TabList>
            <Tab>By Operator</Tab>
            <Tab>By Weapon</Tab>
          </TabList>

          <Select mt={4} variant="outline" focusBorderColor="yellow.600" onChange={(e: any) => setSeason(e.target.selectedIndex)}>
            {Seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </Select>

          <TabPanels>
            <TabPanel>
              <ByOperator selectedSeason={season} />
            </TabPanel>
            <TabPanel>
              <ByWeapon selectedSeason={season} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Box bg={"chakra-subtle-bg"} p={4}>
        <Center>
          <VStack>
            <Button variant="solid" colorScheme="yellow" onClick={toggleColorMode}>
              Toggle Theme
            </Button>
            <Text>
              Updated on: 2023. 02. 22 {"("}Operation Solar Raid{")"}
            </Text>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default App;

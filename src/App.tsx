import { Center, Container, Wrap, WrapItem } from "@chakra-ui/react";
import WeaponCard from "./WeaponCard";
import { WeaponData } from "./data";

const App = () => {
  return (
    <Container my={5} maxW="container.lg">
      <Center>
        <Wrap>
          {WeaponData.map((weapon) => (
            <WrapItem w={"49%"}>
              <WeaponCard attachment={weapon.attachment} name={weapon.name} />
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </Container>
  );
};

export default App;

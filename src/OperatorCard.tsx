import { Card, CardHeader, Heading, CardBody, Text, Box, Stack, StackDivider, Image } from "@chakra-ui/react";
import { getWeaponAttachment, OperatorDataTemplate } from "./data";

interface props {
  operator: OperatorDataTemplate;
  season: number;
}
const OperatorCard = (props: props) => {
  return (
    <Card variant="filled" w={"full"} size={"sm"} h={"full"}>
      <CardHeader>
        <Image src={`operators/${props.operator.name.toLowerCase()}.svg`} h="32" />
        <Heading size="xl">{props.operator.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {props.operator.weapons.map((weapon) => (
            <Box key={weapon}>
              <Heading size="xs" textTransform="uppercase">
                {weapon}
              </Heading>
              <Text pt="2" fontSize="sm">
                {getWeaponAttachment(weapon, props.season)}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default OperatorCard;

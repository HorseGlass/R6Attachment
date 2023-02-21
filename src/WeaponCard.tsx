import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
import { WeaponDataTemplate } from "./data";

const WeaponCard = (props: WeaponDataTemplate) => {
  return (
    <Card variant="filled" w={"full"}>
      <CardHeader>
        <Heading>{props.name}</Heading>
      </CardHeader>

      <CardBody>
        <Text>{props.attachment}</Text>
      </CardBody>
    </Card>
  );
};

export default WeaponCard;

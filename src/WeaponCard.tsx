import { Card, CardHeader, Heading, CardBody, Text, Box } from "@chakra-ui/react";
import { WeaponDataTemplate } from "./data";

const WeaponCard = (props: WeaponDataTemplate) => {
  return (
    <Card variant="filled" w={"full"} size={"sm"}>
      <CardHeader>
        <Heading size="xl">{props.name}</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Attachment
          </Heading>
          <Text pt="2" fontSize="sm">
            {props.attachment}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default WeaponCard;

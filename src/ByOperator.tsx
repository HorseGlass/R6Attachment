import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { AttackerOperatorData, DefenderOperatorData } from "./data";
import OperatorCard from "./OperatorCard";

interface props {
  selectedSeason: number;
}
const ByOperator = (props: props) => {
  return (
    <>
      <Heading>Attackers</Heading>
      <Wrap>
        {AttackerOperatorData.map((operator) => (
          <WrapItem key={operator.name} flex={1} flexBasis={"49%"}>
            <OperatorCard operator={operator} season={props.selectedSeason} />
          </WrapItem>
        ))}
      </Wrap>
      <Heading>Defenders</Heading>
      <Wrap>
        {DefenderOperatorData.map((operator) => (
          <WrapItem key={operator.name} flex={1} flexBasis={"49%"}>
            <OperatorCard operator={operator} season={props.selectedSeason} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default ByOperator;

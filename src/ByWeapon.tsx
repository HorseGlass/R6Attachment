import { Wrap, WrapItem } from "@chakra-ui/react";
import { WeaponData } from "./data";
import WeaponCard from "./WeaponCard";

interface props {
  selectedSeason: number;
}
const ByWeapon = (props: props) => {
  return (
    <Wrap>
      {WeaponData[props.selectedSeason].map((weapon) => (
        <WrapItem key={weapon.name} flex={1} flexBasis={"49%"}>
          <WeaponCard attachment={weapon.attachment} name={weapon.name} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ByWeapon;

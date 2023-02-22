export type Attachment = "Muzzle Brake" | "Flash Hider" | "Compensator" | "Extended Barrel / Suppressor" | "N/A";
export interface WeaponDataTemplate {
  name: string;
  attachment: Attachment;
}

interface WeaponDataTable {
  [key: number]: WeaponDataTemplate[];
}
export const WeaponData: WeaponDataTable = {
  0: [
    { name: "L85A2", attachment: "Muzzle Brake" },
    { name: "AR33", attachment: "Muzzle Brake" },
    { name: "G36C", attachment: "Muzzle Brake" },
    { name: "R4C", attachment: "Flash Hider" },
    { name: "556XI", attachment: "Flash Hider" },
    { name: "F2", attachment: "Muzzle Brake" },
    { name: "AUG A2", attachment: "Flash Hider" },
    { name: "552 Commando", attachment: "Muzzle Brake" },
    { name: "G8A1", attachment: "Muzzle Brake" },
    { name: "C8-SFW", attachment: "Muzzle Brake" },
    { name: "MK17-CQB", attachment: "Compensator" },
    { name: "Para308", attachment: "Extended Barrel / Suppressor" },
    { name: "M249", attachment: "Muzzle Brake" },
    { name: "Type89", attachment: "Flash Hider" },
    { name: "C7E", attachment: "Muzzle Brake" },
    { name: "PDW9", attachment: "Flash Hider" },
    { name: "T-95 LSW", attachment: "Compensator" },
    { name: "LMG-E", attachment: "Compensator" },
    { name: "M762", attachment: "Flash Hider" },
    { name: "V308", attachment: "Muzzle Brake" },
    { name: "SPEAR .308", attachment: "Muzzle Brake" },
    { name: "6P41", attachment: "Muzzle Brake" },
    { name: "M4", attachment: "Flash Hider" },
    { name: "AK-74M", attachment: "Flash Hider" },
    { name: "F90", attachment: "Flash Hider" },
    { name: "M249 SAW", attachment: "Compensator" },
    { name: "FMG9", attachment: "Extended Barrel / Suppressor" },
    { name: "ARX200", attachment: "Muzzle Brake" },
    { name: "AK12", attachment: "Flash Hider" },
    { name: "SCK2000", attachment: "Compensator" },
    { name: "MP7", attachment: "Compensator" },
    { name: "POF-9", attachment: "Flash Hider" },
    { name: "MP5K", attachment: "Flash Hider" },
    { name: "UMP45", attachment: "Extended Barrel / Suppressor" },
    { name: "MP5", attachment: "Flash Hider" },
    { name: "P90", attachment: "Flash Hider" },
    { name: "9x19SVN", attachment: "Muzzle Brake" },
    { name: "416C", attachment: "Flash Hider" },
    { name: "9mm C1", attachment: "Extended Barrel / Suppressor" },
    { name: "MPX", attachment: "Extended Barrel / Suppressor" },
    { name: "M12", attachment: "Extended Barrel / Suppressor" },
    { name: "Vector .45 ACP", attachment: "Muzzle Brake" },
    { name: "T5 SMG", attachment: "Flash Hider" },
    { name: "SCORPION EVO 3 A1", attachment: "Compensator" },
    { name: "K1A", attachment: "Compensator" },
    { name: "ALDA 5.56", attachment: "Muzzle Brake" },
    { name: "Mx4 Storm", attachment: "Flash Hider" },
    { name: "AUG A3", attachment: "Muzzle Brake" },
    { name: "P10 Roni", attachment: "Flash Hider" },
    { name: "Commando 9", attachment: "Muzzle Brake" },
    { name: "UZK50GI", attachment: "Muzzle Brake" },
    { name: "SMG11", attachment: "Flash Hider" },
    { name: "Bearing-9", attachment: "Flash Hider" },
    { name: "SPSMG9", attachment: "Compensator" },
    { name: "C75", attachment: "Extended Barrel / Suppressor" },
  ],
  1: [{ name: "Not yet uploaded", attachment: "N/A" }],
};

export interface OperatorDataTemplate {
  name: string;
  weapons: string[];
}
export const AttackerOperatorData: OperatorDataTemplate[] = [
  {
    name: "Sledge",
    weapons: ["L85A2"],
  },
  {
    name: "Thatcher",
    weapons: ["L85A2", "AR33"],
  },
  {
    name: "Ash",
    weapons: ["R4C", "G36C"],
  },
  {
    name: "Thermite",
    weapons: ["556XI"],
  },
  {
    name: "Twitch",
    weapons: ["F2"],
  },
  {
    name: "Glaz",
    weapons: ["Bearing-9"],
  },
  {
    name: "Fuze",
    weapons: ["AK12", "6P41"],
  },
  {
    name: "IQ",
    weapons: ["552 Commando", "AUG A2", "G8A1"],
  },
  {
    name: "Buck",
    weapons: ["C8-SFW"],
  },
  {
    name: "Blackbeard",
    weapons: ["MK17-CQB"],
  },
  {
    name: "Capitao",
    weapons: ["Para308", "M249"],
  },
  {
    name: "Hibana",
    weapons: ["Type89", "Bearing-9"],
  },
  {
    name: "Jackal",
    weapons: ["PDW9", "C7E"],
  },
  {
    name: "Ying",
    weapons: ["T-95 LSW"],
  },
  {
    name: "Zofia",
    weapons: ["LMG-E", "M762"],
  },
  {
    name: "Dokkaebi",
    weapons: ["SMG12", "C75"],
  },
  {
    name: "Lion",
    weapons: ["V308"],
  },
  {
    name: "Finka",
    weapons: ["SPEAR .308", "6P41"],
  },
  {
    name: "Maverick",
    weapons: ["M4"],
  },
  {
    name: "Nomad",
    weapons: ["ARX200", "AK-74M"],
  },
  {
    name: "Gridlock",
    weapons: ["M249 SAW", "F90"],
  },
  {
    name: "Nokk",
    weapons: ["FMG9"],
  },
  {
    name: "Amaru",
    weapons: ["G8A1", "SMG11"],
  },
  {
    name: "Kali",
    weapons: ["SPSMG9", "C75"],
  },
  {
    name: "Iana",
    weapons: ["G36C", "ARX200"],
  },
  {
    name: "Ace",
    weapons: ["AK12"],
  },
  {
    name: "Zero",
    weapons: ["MP7", "SCK2000"],
  },
  {
    name: "Flores",
    weapons: ["AR33"],
  },
  {
    name: "Osa",
    weapons: ["556XI", "PDW9"],
  },
  {
    name: "Sens",
    weapons: ["POF-9"],
  },
  {
    name: "Grim",
    weapons: ["552 Commando"],
  },
  {
    name: "Brava",
    weapons: ["Para308"],
  },
];
export const DefenderOperatorData: OperatorDataTemplate[] = [
  {
    name: "Smoke",
    weapons: ["MP5K", "SMG11"],
  },
  {
    name: "Mute",
    weapons: ["MP5K", "SMG11"],
  },
  {
    name: "Castle",
    weapons: ["UMP45"],
  },
  {
    name: "Pulse",
    weapons: ["UMP45"],
  },
  {
    name: "Doc",
    weapons: ["MP5", "P90"],
  },
  {
    name: "Rook",
    weapons: ["MP5", "P90"],
  },
  {
    name: "Kapkan",
    weapons: ["9x19SVN"],
  },
  {
    name: "Tachanka",
    weapons: ["9x19SVN"],
  },
  {
    name: "Jager",
    weapons: ["416C"],
  },
  {
    name: "Bandit",
    weapons: ["MP7"],
  },
  {
    name: "Frost",
    weapons: ["9mm C1"],
  },
  {
    name: "Valkyrie",
    weapons: ["MPX"],
  },
  {
    name: "Caveira",
    weapons: ["M12"],
  },
  {
    name: "Echo",
    weapons: ["Bearing-9"],
  },
  {
    name: "Mira",
    weapons: ["Vector .45 ACP"],
  },
  {
    name: "Lesion",
    weapons: ["T5 SMG"],
  },
  {
    name: "Ela",
    weapons: ["SCORPION EVO 3 A1"],
  },
  {
    name: "Vigil",
    weapons: ["K1A", "SMG12"],
  },
  {
    name: "Maestro",
    weapons: ["ALDA 5.56"],
  },
  {
    name: "Alibi",
    weapons: ["Mx4 Storm"],
  },
  {
    name: "Clash",
    weapons: ["SPSMG9"],
  },
  {
    name: "Kaid",
    weapons: ["AUG A3"],
  },
  {
    name: "Mozzie",
    weapons: ["P10 Roni", "Commando 9"],
  },
  {
    name: "Warden",
    weapons: ["MPX", "SMG12"],
  },
  {
    name: "Goyo",
    weapons: ["Vector .45 ACP"],
  },
  {
    name: "Wamai",
    weapons: ["MP5K", "AUG A2"],
  },
  {
    name: "Oryx",
    weapons: ["T5 SMG"],
  },
  {
    name: "Melusi",
    weapons: ["MP5"],
  },
  {
    name: "Aruni",
    weapons: ["P10 Roni"],
  },
  {
    name: "Thunderbird",
    weapons: ["SPEAR .308", "Bearing-9"],
  },
  {
    name: "Thorn",
    weapons: ["UZK50GI"],
  },
  {
    name: "Azami",
    weapons: ["9x19SVN"],
  },
  {
    name: "Solis",
    weapons: ["P90"],
  },
];

export const Seasons = ["Operation Solar Raid", "Operation Commanding Force"];

export function getWeaponAttachment(name: string, season: number): Attachment {
  for (let i = 0; i < WeaponData[season].length; i++) {
    if (WeaponData[season][i].name == name) return WeaponData[season][i].attachment;
  }
  return "N/A";
}

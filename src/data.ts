export type Attachment = "Muzzle Brake" | "Flash Hider" | "Compensator" | "Extended Barrel / Suppressor";
export interface WeaponDataTemplate {
  name: string;
  attachment: Attachment;
}

export const WeaponData: WeaponDataTemplate[] = [
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
];

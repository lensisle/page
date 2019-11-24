import t1 from "./img/1.svg";
import t2 from "./img/2.svg";

export const T1 = {
  img: t1,
  id: "t1",
  name: "Black Diamond",
  description: "This is a black diamond trophy"
};

export const T2 = {
  img: t2,
  id: "t2",
  name: "Moon",
  description: "This is a moon trophy"
};

export const StepNames = {
  Introduction: Symbol(),
  ConnectionGift: Symbol(),
  FastEnd: Symbol()
};

export const AchievementsList = [
  "First Trophy",
  "Connection stablished",
  "About me",
  "Teammates"
];

export const CoolDowns = {
  ByteShards: 3
};

export const ResourcesData = {
  ByteShards: {
    name: "Byte Shards"
  }
};

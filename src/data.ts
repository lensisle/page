import t1 from "./img/1.svg";
import t2 from "./img/2.svg";

export interface Log {
  id: string;
  text: string;
}

export interface Trophy {
  img: string;
  id: string;
  name: string;
  description: string;
}

export interface Stats {
  [stat: string]: number;
}

export const AchievementsList: Array<string> = [
  "First Artifact",
  "Teammates",
  "The Source"
];

export const T1: Trophy = {
  img: t1,
  id: "t1",
  name: "Black Diamond",
  description: "This is a black diamond trophy"
};

export const T2: Trophy = {
  img: t2,
  id: "t2",
  name: "Moon",
  description: "This is a moon trophy"
};

export enum StepName {
  Introduction,
  TheVoidEntrance,
  InsideTheVoidFirst,
  FastEnd
}

export enum CoolDowns {
  AbandonedSouls = 12
}

export enum ResourcesData {
  AbandonedSouls = "Abandoned Souls"
}

export enum ViewDirection {
  West,
  North,
  South,
  East
}

export enum PlayerStat {
  Attack = "Attack",
  Spirit = "Spirit",
  Intelligence = "Intelligence",
  Determination = "Determination"
}

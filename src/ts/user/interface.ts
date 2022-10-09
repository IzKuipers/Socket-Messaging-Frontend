export interface Player {
  name: string;
  score: number;
  awards: Award[];
}
export interface Award {
  name: string;
  reqScore: number;
  takenFrom?: string;
}

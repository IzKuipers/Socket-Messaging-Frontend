export interface Player {
  name: string;
  score: number;
  awards: Award[];
  password: string;
}
export interface Award {
  name: string;
  reqScore: number;
  takenFrom?: string;
}

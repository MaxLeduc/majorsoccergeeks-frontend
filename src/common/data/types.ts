export interface Club {
  id: string;
  name: string;
}

export interface Position {
  id: string;
  name: string;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  club: Club;
  baseSalary: number;
  guaranteedCompensation: number;
  positions: Position[];
}

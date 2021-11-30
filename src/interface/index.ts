
export interface Internal {
  death: number;
  treating: number;
  cases: number;
  recovered: number;
}

export interface World {
  death: number;
  treating: number;
  cases: number;
  recovered: number;
}

export interface Total {
  internal: Internal;
  world: World;
}

export interface VietNam {
  death: number;
  treating: number;
  cases: number;
  recovered: number;
}

export interface World2 {
  death: number;
  treating: number;
  cases: number;
  recovered: number;
}

export interface Today {
  internal: VietNam;
  world: World2;
}

export interface Overview {
  date: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  avgCases7day: number;
  avgRecovered7day: number;
  avgDeath7day: number;
}

export interface Location {
  name: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  casesToday: number;
}

export interface Covid19Data {
  total: Total;
  today: Today;
  overview: Overview[];
  locations: Location[];
}


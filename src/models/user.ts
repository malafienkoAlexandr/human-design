export interface User {
  id: string;
  name: string;
  birthDate: string;
  birthTime: string;
  utc: number;
  city: string;
  country: string;
}

export interface UserInfo {
  profile: string;
  type: string;
  authority: string;
  definition: number;
  personalGates: [number];
  designGates: [number];
  superActiveNumbers: [number];
  channel: [string];
}

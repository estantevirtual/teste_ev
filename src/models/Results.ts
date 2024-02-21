export type Results = {
  id: string;
  competition: string;
  athlete: string;
  value: number;
  unit: string;
  // "s" | "min" | "m" | "km";
};

export interface ResultInputDTO {
  competition: string;
  athlete: string;
  value: number;
  unit: string;
}

export type Competitions = {
  id: string;
  name: string;
  modality: string;
};

export interface CompetitionInputDTO {
  name: string;
  modality: string;
}

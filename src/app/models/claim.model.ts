export interface ClaimModel {
  _id: string;
  description: string;
  start_date: Date;
  end_date: Date;
  reduction: number;
  doctor: string;
  validated: boolean;
}

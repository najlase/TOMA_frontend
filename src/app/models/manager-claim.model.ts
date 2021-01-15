export interface ManagerClaimModel {
  _id: string;
  description: string;
  start_date: Date;
  end_date: Date;
  reduction: number;
  doctor: string;
  validated: boolean;
  personID: number;
  firstName: string;
  lastName: string;
}

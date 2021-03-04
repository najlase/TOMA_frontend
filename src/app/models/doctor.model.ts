export interface DoctorModel {
  _id: string;
  firstName: string;
  lastName: string;
  img: string;
  birthday: Date;
  specialty: string;
  patients: any[];
  connectionRequests: any[];
}

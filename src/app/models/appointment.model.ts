export interface AppointmentModel {
  _id: string;
  doctor: any;
  patient: any;
  date: Date;
  status: string;
  note: string;
}

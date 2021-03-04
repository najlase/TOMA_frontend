export interface UserModel {
  _id: string;
  email: string;
  password: string;
  role: string;
  User: string;
  profile: {
    _id: string;
    firstName: string;
    lastName: string;
    img: string;
    birthday: Date;
    connectionRequests: any[];
  };
  doctors?: string[];
  patients?: string[];
}

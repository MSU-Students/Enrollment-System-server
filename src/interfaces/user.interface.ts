export interface User {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  username?: string;
  password?: string;
  userType?: 'admin' | 'chairperson' | 'registrar';
  contact?: string;
  email?: string;
}

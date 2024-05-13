export interface Student {
    id: number;
    name: string;
    dateOfBirth: Date;
    address: string;
    bloodType: string;
    email : string;
    phone : string;
    groups: Subject[]
  }
  
export interface Subject{
  name : string
  status : string
}
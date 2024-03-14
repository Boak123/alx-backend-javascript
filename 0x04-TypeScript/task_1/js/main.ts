export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [index:string]: Any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

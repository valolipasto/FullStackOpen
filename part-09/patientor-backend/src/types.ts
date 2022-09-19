export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface EntryBase {
  id: string;
  date: string;
  type: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose["code"]>;
  description: string;
}

export interface HospitalEntry extends EntryBase {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  };
}

export interface OccupationalHealthcareEntry extends EntryBase {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
}

export interface HealthCheckEntry extends EntryBase {
  type: "HealthCheck";
  healthCheckRating: number;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type NewPatient = Omit<Patient, "id">;
export type PublicPatient = Omit<Patient, "ssn" | "entries">;

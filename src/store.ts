//Store de Zustand

import { create } from "zustand";
import { DraftPacient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  addPatient: (data:DraftPacient) => void
};

export const usePatientStore = create<PatientState>(() => ({
  patients: [],
  addPatient: (data) => {
    console.log("data",data)
  }
}));

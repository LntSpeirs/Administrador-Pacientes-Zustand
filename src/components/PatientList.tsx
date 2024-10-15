import { usePatientStore } from "../store";

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients);
  return <div>PatientList</div>;
};

export default PatientList;

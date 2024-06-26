import { Seq } from 'immutable';

// Function to print best students with scores >= 70
export default function printBestStudents(grades) {
  const filteredGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();

  console.log(filteredGrades);
}

import { Seq } from 'immutable';

// Function to print best students with scores >= 70
export default function printBestStudents(grades) {
  const filteredGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: capitalizeFirstLetter(student.firstName),
      lastName: capitalizeFirstLetter(student.lastName),
    }))
    .toJS(); // Convert to plain JavaScript object

  console.log(filteredGrades);
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

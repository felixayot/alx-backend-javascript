interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'James',
    lastName: 'Bond',
    age: 25,
    location: 'New Hampshire',
  };

  const student2: Student = {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 26,
    location: 'Manchester',
  };

let studentsList: Student[] = [student1, student2];
/*console.log(studentsList.forEach(s => {
    s.firstName,
    s.location}));
*/

const table = document.getElementById('studentTable') as HTMLTableElement;
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})

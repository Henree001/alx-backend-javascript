interface student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: student = {
    firstName: 'john',
    lastName: 'okafor',
    age: 26,
    location: 'Akala',
}

const student2: student = {
    firstName: 'Henry',
    lastName: 'okafor',
    age: 25,
    location: 'Bodija',
}

const studentsList: student[] = [student1, student2];

const table = document.createElement('table');
const tableRow = document.createElement('tr');
const tableHead = document.createElement('th');
const tableHead2 = document.createElement('th');
tableHead.innerHTML = 'Firstname';
tableHead2.innerHTML = 'Location';

tableRow.appendChild(tableHead);
tableRow.appendChild(tableHead2);
table.appendChild(tableRow);

for (const studentinfo of studentsList) {
const tableRow2 = document.createElement('tr');
const tableData = document.createElement('td');
const tableData2 = document.createElement('td');
tableData.innerHTML = `${studentinfo.firstName}`;
tableData2.innerHTML = `${studentinfo.location}`;
tableRow2.appendChild(tableData);
tableRow2.appendChild(tableData2);
table.appendChild(tableRow2);
}

const styling = `
table {
    border-collapse: collapse;
}

th {
    font-weight: bold;
    border: 1px solid black;
    text-align: center;
    padding: 10px;
}
td {
    border: 1px solid black;
    text-align: center;
    padding: 10px;

}
`
const style = document.createElement('style');
style.innerHTML = styling;
document.body.appendChild(table);
document.head.appendChild(style);
document.title = 'table';

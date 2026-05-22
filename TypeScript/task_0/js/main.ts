interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
firstName: "Alice",
lastName: "Dupont",
age: 20,
location: "Paris",
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Martin",
    age: 22,
    location: "Lyon",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student: Student) => {
    const row = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = student.firstName;

    const tdLocation = document.createElement("td");
    tdLocation.textContent = student.location;

    row.appendChild(tdName);
    row.appendChild(tdLocation);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
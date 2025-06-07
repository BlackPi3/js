const employees = [
    { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
    { id: 4, name: 'Shawn Mendez', age: 42, department: 'HR', salary: 48000 }
];

function displayEmployees() {
    const totalEmployees = employees.map((e) => `<p>${e.id}) ${e.name}: ${e.age} - ${e.department} - ${e.salary}</p>`).join("");
    document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => { return acc += employee.salary; }, 0);
    window.alert(`total salaries: ${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter((e) => e.department == "HR");
    const display = hrEmployees.map((e) => `<p>${e.id}) ${e.name}: ${e.age} - ${e.department} - ${e.salary}`).join("");
    document.getElementById("employeesDetails").innerHTML = display;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }
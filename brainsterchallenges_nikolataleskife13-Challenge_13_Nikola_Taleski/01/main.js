function Employee(nameArg, companyNameArg, jobPositionArg, salaryArg) {
  this.name = nameArg;
  this.companyName = companyNameArg;
  this.jobPosition = jobPositionArg;
  this.salary = salaryArg;
}

const employee = new Employee("Peter", "New Company", "Employee", 600);
const boss = new Employee("Michael", "New Company", "Boss", 900);
const director = new Employee("John", "New Company", "Director", 1200);

const allEmployees = [employee, boss, director];
console.log(allEmployees);

const div = document.querySelector("#content");
const ul = document.createElement("ul");

allEmployees.forEach((employee) => {
  const employeeLi = document.createElement("li");
  employeeLi.innerHTML = `<b>Name:</b> ${employee.name}, <b>Company name:</b> ${employee.companyName}, <b>Job position:</b> ${employee.jobPosition}, <b>Salary:</b> ${employee.salary}`;
  ul.appendChild(employeeLi);
  div.appendChild(ul);
});

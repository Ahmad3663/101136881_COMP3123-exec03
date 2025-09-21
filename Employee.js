const employees = [
   { id: 1, firstName: "John", lastName: "Doe", salary: 5000 },
  { id: 2, firstName: "Jane", lastName: "Smith", salary: 6000 },
   { id: 3, firstName: "Alice", lastName: "Johnson", salary: 5500 },
   { id: 4, firstName: "Bob", lastName: "Brown", salary: 7000 }
 ];
   function getAllEmployees() {
     return employees;
   }

    function getEmployeeNames() {
   return employees.map(e => `${e.firstName} ${e.lastName}`).sort();
    }

   function getTotalSalary() {

    return employees.reduce((sum, e) => sum + e.salary, 0);
   }

  module.exports = {
   getAllEmployees,
   getEmployeeNames,
    getTotalSalary
 };
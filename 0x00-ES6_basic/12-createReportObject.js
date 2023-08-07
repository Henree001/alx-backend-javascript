export default function createReportObject(employeesList) {
  const allemployees = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return allemployees;
}

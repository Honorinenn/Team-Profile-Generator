const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Jude Bond";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Jude Bond", id, "judebond@mnj.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "judebond@mnj.com";
    const employee = new Employee("Jude Bond", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Jude Bond", 1, "judebond@mnj.com");
    expect(employee.getRole()).toBe(role);
  });
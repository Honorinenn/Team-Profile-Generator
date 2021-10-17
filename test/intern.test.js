const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Seattle School of Management";
    const employee = new Intern("Honorine", 1, "honorine@mnj", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Honorine", 1, "honorinendzah@mnj.com", "Honorinenn");
    expect(employee.getRole()).toBe(role);
  });
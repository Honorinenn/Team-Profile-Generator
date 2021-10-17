const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "Honorinenn";
    const employee = new Engineer("Honorine", 1, "honorinendzah@mnj.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Honorine", 1, "honorinendzah@mnj.com", "Honorinenn");
    expect(employee.getRole()).toBe(role);
  });
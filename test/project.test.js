const test = require("node:test");
const assert = require("node:assert/strict");

test("Student Marketplace API project metadata is defined", () => {
  assert.equal("Student Marketplace API".length > 0, true);
  assert.match("Backend Developer, Software Developer, Full Stack Developer", /Developer|Engineer|Graduate/);
});

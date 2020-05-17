describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    cy.get(".like-button").click("bottom");
    cy.get(".liked");
    cy.get(".like-couter").contains(151);
  });
});

describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    cy.get(".dislike-button").click("bottom").click('bottom');
    // cy.get(".dislike-button");
    cy.get(".like-couter").contains(12)
  });
});

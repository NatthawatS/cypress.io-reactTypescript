describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    cy.get(".like-button").click('bottom');
    cy.get(".dislike-button").click("bottom");
    cy.get(".dislike-button");
    cy.get(".like-button").contains(150);
    cy.get(".dislike-button").contains(13);
  });
});

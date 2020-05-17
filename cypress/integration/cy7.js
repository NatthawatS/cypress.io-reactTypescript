describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    cy.get(".dislike-button").click("bottom");
    cy.get(".disliked");
    cy.get(".like-couter").contains(13)
  });
});

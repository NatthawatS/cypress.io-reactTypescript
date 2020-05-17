describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    // 1
    cy.get(".like-button").should("be.visible");
    // 2
    cy.get(".dislike-button").should("be.visible");
    // 3 check value 150

    // 4 check value 12

    // 5
    cy.get(".like-button").click("bottom");
    // 6
    cy.get(".like-button").click("bottom");
    // 7
    cy.get(".dislike-button").click("bottom");
    // 8
    cy.get(".dislike-button").click("bottom");
    // 9

    cy.get(".like-button").click("bottom");
    cy.get(".dislike-button").click("bottom");
    // cy.get('.App-link').should('be.visible')
    //   .and('have.text', 'Learn React')
  });
});

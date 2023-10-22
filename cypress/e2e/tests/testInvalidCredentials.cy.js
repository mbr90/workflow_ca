describe("Login in with invalid credentials", () => {
  it("prevents the user form logging in and presents an readable error", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(`.modal-footer [data-bs-target="#loginModal"]`).click();
    cy.wait(1000);
    cy.get("#loginEmail").type("invalidCredentials@email.com");
    cy.get("#loginPassword").type("notAPassword{enter}");
    cy.get("#loginEmail");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Only Noroff student or teacher emails are valid.");
    });
  });
});

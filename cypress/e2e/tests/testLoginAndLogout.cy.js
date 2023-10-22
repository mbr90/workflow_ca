import "cypress-localstorage-commands";

describe("Login and logout", () => {
  it("allows the user to log in and access the profile", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(`.modal-footer [data-bs-target="#loginModal"]`).click();
    cy.wait(1000);
    cy.get("#loginEmail").type("cypress@stud.noroff.no");
    cy.get("#loginPassword").type("passord1234{enter}");
    cy.get(".profile-email").contains("cypress");
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.exist;
    });
    cy.get(".text-end [data-auth=logout]").click();
    cy.wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.exist;
    });
  });
});

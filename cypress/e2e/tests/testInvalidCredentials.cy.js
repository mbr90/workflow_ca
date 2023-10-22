// describe("Login in with inalid credentials", () => {
//   it("prevents the user form logging in and presents an readable error", () => {
//     cy.visit("/");
//     cy.wait(1000);
//     cy.get(`.modal-footer [data-bs-target="#loginModal"]`).click();
//     cy.wait(1000);
//     cy.get("#loginEmail").type("invalidCredentials{enter}");
//     cy.wait(1000);
//     cy.get("#loginEmail").clear();
//     cy.wait(1000);
//     cy.get("#loginPassword").type("notAPassword{enter}");
//     cy.wait(1000);
//     cy.get("#loginPassword").clear();
//     cy.wait(1000);
//     cy.get("#loginEmail").type("invalidCredentials@email.com");
//     cy.wait(1000);
//     cy.get("#loginPassword").type("notAPassword{enter}");
//     cy.wait(200);
//     cy.on("window:alert", (str) => {
//       expect(str).to.equal(
//         "Only Dette er bare tull student or  emails are valid."
//       );
//     });
//   });
// });

describe("Login in with inalid credentials", () => {
  it("prevents the user form logging in and presents an readable error", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(`.modal-footer [data-bs-target="#loginModal"]`).click();
    cy.wait(1000);
    cy.get("#loginEmail").type("invalidCredentials@email.com");
    cy.get("#loginPassword").type("notAPassword{enter}");
    cy.wait(500);
    cy.get("#loginEmail")
      .invoke("attr", "title")
      .then((title) => {
        expect(title).to.exist;
      });
  });
});

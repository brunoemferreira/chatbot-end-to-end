Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("/login");

      cy.get('input#email[name="Username"]').type(user);
      cy.get('input#password[name="Password"]').type(password, { log: false });
      cy.get('button#blip-login[name="button"]').click();
    };

    login();
  }
);

describe("Todo List App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/newsletter");
  });

  it("check localhost", () => {
    cy.visit("http://localhost:5173/newsletter");
  });

  it("check display app", () => {
    cy.get("input[cy-data='email-input']").should("be.visible");
    cy.get("button[cy-data='subscribe-button']").should("be.visible");
    cy.get("[cy-data='app-title']").should("be.visible");
  });

  it("should display loading indicator while subscribing", () => {
    cy.intercept("POST", "/api/subscribe", { delay: 1000 }).as("subscribe"); // Simulasi delay server
    cy.get("input[cy-data='email-input']").type("valid@email.com");
    cy.get("button[cy-data='subscribe-button']").click();
    cy.get(".spinner-border").should("be.visible");
    cy.wait("@subscribe");
    cy.get(".spinner-border").should("not.exist");
  });
});

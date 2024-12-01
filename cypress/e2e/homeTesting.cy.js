describe("Home Personal Blog", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("check localhost", () => {
    cy.visit("http://localhost:5173/");
  });

  it("should display all blog posts", () => {
    cy.get(".container");
    cy.contains("All blog posts");
    cy.parent();
    cy.find(".card");
    cy.should("have.length.at.least", 1);
  });

  it("should display recent blog posts", () => {
    cy.get(".container");
    cy.contains("Recent blog posts");
    cy.parent();
    cy.find(".card");
    cy.should("have.length.at.least", 1);
  });

  it("should display all blog posts", () => {
    cy.get(".container");
    cy.contains("All blog posts");
    cy.parent();
    cy.find(".card");
    cy.should("have.length.at.least", 1);
  });

  it("should navigate to detail page when clicking curent blog post", () => {
    cy.get(".container");
    cy.contains("Recent blog posts");
    cy.parent();
    cy.find(".card");
    cy.first();
    cy.click();
    cy.url().should("include", "/blog/");
  });

  it("should navigate to detail page when clicking all blog post", () => {
    cy.get(".container");
    cy.contains("All blog posts");
    cy.parent();
    cy.find(".card");
    cy.first();
    cy.click();
    cy.url().should("include", "/blog/");
  });
});

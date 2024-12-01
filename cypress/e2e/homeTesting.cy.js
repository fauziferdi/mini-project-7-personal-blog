describe("Home Personal Blog", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://lumoshive-academy-media-api.vercel.app/api/games/news?page=1"
    ).as("getAll");
    cy.intercept(
      "GET",
      "https://lumoshive-academy-media-api.vercel.app/api/games?page=1"
    ).as("getRecent");
    cy.visit("http://localhost:5173/");
    cy.wait("@getAll");
    cy.wait("@getRecent");
  });

  it("check localhost", () => {
    cy.get("nav.navbar").should("be.visible");
    cy.get("h1.header-cstm").should("be.visible");
    cy.get('[data-cy="recent-blog-section"]').should("be.visible");
    cy.get('[data-cy="all-blog-section"]').should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("should display recent blog posts", () => {
    cy.get('[data-cy="recent-blog-posts"]')
      .find(".card")
      .should("have.length.at.least", 1);
  });

  it("should display all blog posts", () => {
    cy.get('[data-cy="all-blog-posts"]')
      .find(".card")
      .should("have.length.at.least", 1);
  });

  it("should navigate to detail page when clicking current blog post", () => {
    cy.get('[data-cy="recent-blog-posts"]').find(".card").first().click();
    cy.url().should("include", "/blog/");
  });

  it("should navigate to detail page when clicking all blog post", () => {
    cy.get('[data-cy="all-blog-posts"]').find(".card").first().click();
    cy.url().should("include", "/blog/");
  });
});

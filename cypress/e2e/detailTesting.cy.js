describe("Detail Personal Blog", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://lumoshive-academy-media-api.vercel.app/api/detail/2024/11/19/the-game-awards-2024-19112024"
    ).as("getDetailBlog");
    cy.intercept(
      "GET",
      "https://lumoshive-academy-media-api.vercel.app/api/games?page=1"
    ).as("getRecent");
    cy.visit(
      "http://localhost:5173/blog/2024/11/19/the-game-awards-2024-19112024"
    );
    cy.wait("@getDetailBlog");
    cy.wait("@getRecent");
  });

  it("check localhost", () => {
    cy.get("nav.navbar").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("should display blog content correctly", () => {
    cy.get('[data-cy="blog-title"]').should("be.visible");
    cy.get('[data-cy="blog-date"]').should("be.visible");
    cy.get('[data-cy="blog-content"]').should("not.be.empty");
  });

  it("should display related posts", () => {
    cy.get('[data-cy="related-posts"] .card').should("have.length.at.least", 1);
  });

  it("should display newsletter component", () => {
    cy.get('[data-cy="newsletter"]').should("be.visible");
  });

  it("should navigate to another detail page when clicking a related post", () => {
    cy.get('[data-cy="related-posts"] .card').first().click();
    cy.url().should("include", "/blog/");
    cy.get('[data-cy="blog-title"]').should("be.visible");
  });
});

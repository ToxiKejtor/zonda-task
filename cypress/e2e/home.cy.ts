// https://docs.cypress.io/api/introduction/api.html

it("Visits main page and loads default BTC-PLN pair with default", () => {
  cy.visit("/");
  cy.contains("h3", "bids");
  cy.contains("h3", "asks");
  cy.get("table tbody tr").should("have.length.greaterThan", 0);
});

it("on change: updates select value", () => {
  cy.visit("/");
  cy.get(".v-field").click();
  cy.get(".v-autocomplete__content .v-list .v-list-item").first().click();
  cy.wait(2000);
  cy.get(".v-autocomplete__selection-text").should("not.have.text", "BTC-PLN");

  // compare spread
});

it("on change: updates spread", () => {
  cy.visit("/");
  cy.wait(2000);
  cy.get(".v-banner .v-banner__content").then(($content) => {
    const oldSpread = $content.text();
    cy.get(".v-field").click();
    cy.get(".v-autocomplete__content .v-list .v-list-item").first().click();
    cy.wait(2000);
    cy.get(".v-banner .v-banner__content").should(($content2) => {
      expect($content2.text()).not.to.eq(oldSpread);
    });
  });

  // compare spread
});

it("on change: updates table", () => {
  cy.visit("/");
  cy.wait(2000);
  cy.get("table tbody tr td")
    .first()
    .then(($content) => {
      const oldValue = $content.text();
      cy.get(".v-field").click();
      cy.get(".v-autocomplete__content .v-list .v-list-item").first().click();
      cy.wait(2000);
      cy.get("table tbody tr td")
        .first()
        .should(($content2) => {
          expect($content2.text()).not.to.eq(oldValue);
        });
    });

  // compare spread
});

describe('Add to Cart Functionality on Megaknihy.cz', () => {
  it('should add an item to the cart', () => {
    // Step 1: Visit the homepage
    cy.visit('https://www.megaknihy.cz/');

    // Step 2: Accept cookies if the banner is visible
    cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 })
      .should('be.visible')
      .then(($banner) => {
        if ($banner.is(':visible')) {
          cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
            .should('be.visible')
            .click();
        }
      });

    // Step 3: Verify that the banner is no longer visible
    cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 })
      .should('not.be.visible');

    // Step 4: Search for a product
    cy.get('.search_query.mk-input.cursive', { timeout: 10000 })
      .should('be.visible')
      .type('Harry Potter{enter}');

    // Step 5: Wait for search results and click on the first book
    cy.get('.product_img_link', { timeout: 10000 }).first().click();

    // Step 6: Ensure the book detail page is loaded
    cy.url().should('include', 'harry-potter');

    // Step 7: Click the button that adds the product to the cart
    cy.get('.now_visitors').click();
    cy.get('.submit').first().click();

    // Step 8: Wait for the cart popup to appear and verify its visibility
    cy.get('.cart-popup-content.popup-bookmarks', { timeout: 10000 })
      .should('exist')
      .and('be.visible');

    // Step 9: Click the button to continue to the cart
    cy.get('.mk-btn.mk-primary.js-continue.cart-popup-handled')
      .should('be.visible')
      .click();

    // Step 10: Navigate to the cart page
    cy.visit('https://www.megaknihy.cz/rychla-objednavka');

    // Step 11: Check if the URL is correct
    cy.url().should('include', '/rychla-objednavka');

    // Step 12: Check for the existence of the item in the cart
    cy.contains('Harry Potter and the Philosopher´s Stone', { timeout: 10000 })
      .should('exist')
      .then(() => {
        cy.log('Item found in the cart.');
      });
      
  });
});

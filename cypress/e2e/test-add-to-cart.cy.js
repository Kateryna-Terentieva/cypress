describe('Add to Cart Functionality on Megaknihy.cz', () => {
  it('should add an item to the cart', () => {
    // Step 1: Visit the homepage
    cy.visit('https://www.megaknihy.cz/');

    // Step 2: Log in
    cy.get('a[href*="identita"]', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('katherine.terentieva@gmail.com');
    cy.get('input[name="passwd"]').type('testtest');
    cy.get('button[type="submit"]').click(); // Submit the login form

    // Step 3: Search for a product
    cy.get('.query-input', { timeout: 10000 }).should('be.visible').type('Školní atlas světa{enter}'); // Search for the product

    // Step 4: Add the first product to the cart
    cy.get('.product-item').first().find('.add_to_cart_button').click(); // Click the "Add to Cart" button

    // Step 5: Navigate to the cart
    cy.get('.shopping_cart_link').click(); // Click on the cart icon

    // Step 6: Check that the cart contains the added item
    cy.get('.cart_item').should('have.length.greaterThan', 0); // Ensure at least one item is in the cart

    // Step 7: Check that the correct item is in the cart
    cy.get('.cart_item .product-name').should('contain', 'Školní atlas světa'); // Check for the product name
  });
});

describe('Add to Cart Functionality', () => {
  it('should add an item to the cart', () => {
    // Step 1: Visit the homepage
    cy.visit('https://www.saucedemo.com/');
    
  
    // Step 2: Log in 
    cy.get('input#user-name').type('standard_user'); // Enter username
    cy.get('input#password').type('secret_sauce'); // Enter password
    cy.get('input#login-button').click(); // Click the login button

    // Step 3: Add the first product to the cart
    cy.get('.inventory_item').first().find('class="btn btn_primary btn_small btn_inventory "').click(); // Click the "Add to Cart" button

    // Step 4: Verify that the item was added to the cart
    cy.get('.shopping_cart_link').click(); // Click on the cart icon

    // Step 5: Check that the cart contains the added item
    cy.get('.cart_item').should('have.length.greaterThan', 0); // Ensure at least one item is in the cart

    // Step 6: Optionally, check that the correct item is in the cart
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack'); // Check for the product name
  });
});
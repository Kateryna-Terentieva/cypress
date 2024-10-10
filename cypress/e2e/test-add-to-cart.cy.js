describe('Add to Cart Functionality', () => {
    it('should add an item to the cart', () => {
      // Step 1: Visit the homepage
      cy.visit('https://www.saucedemo.com/');

      // Step 2: Navigate to the product page
    cy.get('https://www.saucedemo.com/inventory.html') 
    .first(https://www.saucedemo.com/inventory-item.html?id=4)
    .click();

// Step 3: Click the "Add to Cart" button
cy.get('class="btn btn_primary btn_small btn_inventory"') 
.click();

 // Step 4: Verify that the item was added to the cart
 cy.get('class="shopping_cart_link"') 
 .click();

 // Step 5: Check that the cart contains the added item
 cy.get('inventory_item_name') 
 .should('have.length.greaterThan', 0); 

  // Step 6: Optionally, check that the correct item is in the cart
  cy.get('class="inventory_item_name"') // Replace with the selector for the item name in the cart
  .should('contain', 'Sauce Labs Backpack'); // Replace with the actual product name
});
});
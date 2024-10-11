describe('Login', () => {
    it('should login into the webpage', () => {
      // Step 1: Visit the homepage
      cy.visit('https://www.saucedemo.com/');
  
      // Step 2: Log in 
      cy.get('input#user-name').type('standard_user'); // Enter username
      cy.get('input#password').type('secret_sauce'); // Enter password
      cy.get('input#login-button').click(); // Click the login button
    });
});  
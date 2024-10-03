describe('Log in with the email', () => {
  it('Visit the main Kiwi webpage', () => {

    // Visit the website
    cy.visit('https://www.kiwi.com/en/')

    // Click on the Sing in button
    cy.get('TopNav-SingInButton').click();  

    // Click on the Email button
    cy.get('MagicLogin-LoginViaFacebook').click(); 

    // Clisk continue button
    cy.get('Продолжить как Kateryna').click(); 


   
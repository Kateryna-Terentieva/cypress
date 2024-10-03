describe('Log in with the email', () => {
  it('Visit the main Kiwi webpage', () => {
    // Visit the website
    cy.visit('https://www.kiwi.com/en/');

    // Click on the Sign in button
    cy.get('[data-cy="TopNav-SignInButton"]').click();

    // Click on the Email button (assuming you meant Facebook login here, it should be correct)
    cy.get('[data-cy="MagicLogin-LoginViaFacebook"]').click();

    // Click continue button (ensure the selector is correct)
    cy.contains('Продолжить как Kateryna').click();
  })
})
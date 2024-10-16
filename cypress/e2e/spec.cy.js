describe('My First Test', () => {
  it('Log into the page', () => {
      
      cy.visit('https://www.megaknihy.cz/');

      cy.contains('Účet').click();

      cy.url().should('include', '/autentifikace');

      cy.get('input[name="email"]').type('katherine.terentieva@gmail.com');

      cy.get('input[name="passwd"]').type('testtest');

      cy.get('button[type="submit"]').click();

  
  })
})
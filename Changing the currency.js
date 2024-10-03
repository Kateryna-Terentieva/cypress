describe('Changing the currency', () => {
  it('Visit the main Kiwi webpage', () => {
    // Visit the website
    cy.visit('https://www.kiwi.com/en/')

    // Click on the currency button
    cy.get('TopNav-RegionalSettingsButton').click();  

    //Choose the currency EUR
    cy.get('body').should('currency', 'EUR');

    //Click save and continue
    cy.get('SubmitRegionalSettingsButton').click(); 
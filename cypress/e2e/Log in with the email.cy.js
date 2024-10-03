describe('Log in with the email', () => {
  it('Visit the main Kiwi webpage', () => {

    // Visit the website
    cy.visit('https://www.kiwi.com/en/')

    // Click on the Sing in button
    cy.get('TopNav-SingInButton').click();  

    // Click on the Email button
    cy.get('MagicLogin-LoginViaEmail').click(); 

    // Enter the email
    cy.get('"orbit-input-field-input font-base p-form-element-normal-padding z-[2] appearance-none border-none shadow-none box-border size-full min-w-0 bg-transparent flex-1 basis-1/5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [&[data-com-onepassword-filled]]:!bg-inherit peer focus:outline-none [&::placeholder]:opacity-100 [&::placeholder]:text-form-element-foreground [&::-ms-input-placeholder]:text-form-element-foreground [&::-ms-clear]:hidden [&::-ms-reveal]:hidden font-normal""]').type('email');

    //Click the button continue
    cy.get('MagicLogin-Continue').click(); 
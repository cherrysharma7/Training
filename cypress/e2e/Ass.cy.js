describe('Login Session Management', () => {
    //  beforeEach(() => {
    //       cy.visit("https://www.saucedemo.com/")
    //     })
     it('verify that the user is logged in',() => {
        cy.visit("https://www.saucedemo.com/")
         // assertion for URL
         cy.url().should('contain','saucedemo')
         // assertion we logged on the page
         cy.title().should('eq','Swag Labs')
 
  })  
  it ('verify that user enter the invalid username & password',() => {
    //cy.visit("https://www.saucedemo.com/")
     cy.get('[data-test="username"]').type("standard_user")
     cy.get('input[name=password]').type("secret_sauce", {log:false})
     cy.get('[data-test="login-button"]').click()
     // assertion if user is on correct url
     //cy.url().should('contain','inventory')
  })
 
//   it('Verify that item is in the cart', () => {
//    // cy.visit("https://www.saucedemo.com/")
//      cy.get('[data-test="username"]').type('standard_user')
//      cy.get('input[name=password]').type("secret_sauce")
//      cy.get('[data-test="login-button"]').click()
//      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//      // Assertion for item added to cart
//      cy.get('[data-test="remove-sauce-labs-backpack"]').should("exist")
//   })
//    it('Verify that the item is in Cart', () => {
//     //cy.visit("https://www.saucedemo.com/")
//     cy.get('[data-test="username"]').type('standard_user')
//     cy.get('input[name=password]').type("secret_sauce")
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.get('[data-test="shopping-cart-link"]').click();
//     cy.get('[data-test="inventory-item-name"]').should("exist");
//    })
 })
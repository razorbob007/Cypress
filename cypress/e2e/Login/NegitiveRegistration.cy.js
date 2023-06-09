/// <reference types="cypress" />

describe("Open Tourradar website in a browser", () => {
    beforeEach(() => {
      cy.visit("d/europe")
    })
    
    it("should display site heading", () => {
        // Check to see if the text is visible.
        cy.contains("Europe Tours & Trips").should("be.visible")
    })

        ///Open the login menu
    ///Enter email and password to login
    it("should check for invalid sign up", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()

        cy.get('[data-cy="sign-up--name"]').click()
        cy.get('[data-cy="sign-up--name"]').type(` `)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter your name.')
    })

    it("should check for invalid email", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()
        cy.get('[data-cy="sign-up--name"]').type(`tester`)
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').type(` `)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')
        
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`plainaddress`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')
        
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`#@!$%^&*()`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')

        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`@tester.com`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')

        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`Joe Smith <email@tester.com>`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')

        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`email@domain@domain.com`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address.')

        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').clear()
        cy.get('[data-cy="sign-up--email"]').type(`tester@test.com`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Enter min. 6 characters for the password.')
    })

    it("should check for invalid password", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()
        cy.get('[data-cy="sign-up--name"]').click()
        cy.get('[data-cy="sign-up--name"]').type(`tester`)
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').type(`tester@test.com`)
        cy.get('[data-cy="sign-up--password"]').type(` `)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Enter min. 6 characters for the password.')

        cy.get('[data-cy="sign-up--password"]').click()
        cy.get('[data-cy="sign-up--password"]').clear()
        cy.get('[data-cy="sign-up--password"]').type(`1`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Enter min. 6 characters for the password.')

        cy.get('[data-cy="sign-up--password"]').click()
        cy.get('[data-cy="sign-up--password"]').clear()
        cy.get('[data-cy="sign-up--password"]').type(`a`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Enter min. 6 characters for the password.')

        cy.get('[data-cy="sign-up--password"]').click()
        cy.get('[data-cy="sign-up--password"]').clear()
        cy.get('[data-cy="sign-up--password"]').type(`password`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')
    })

    it("should check for invalid password repeat", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()
        cy.get('[data-cy="sign-up--name"]').click()
        cy.get('[data-cy="sign-up--name"]').type(`tester`)
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').type(`tester@test.com`)
        cy.get('[data-cy="sign-up--password"]').type(`123456`)
        cy.get('[data-cy="sign-up--password-repetition"]').type(` `)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')

        cy.get('[data-cy="sign-up--password-repetition"]').type(`1`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')

        cy.get('[data-cy="sign-up--password-repetition"]').type(`a`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')

        cy.get('[data-cy="sign-up--password-repetition"]').type(`password`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')
    })

    it("should check for the guide", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()
        cy.get(':nth-child(2) > label').click()
        cy.get('[data-cy="sign-up--name"]').click()
        cy.get('[data-cy="sign-up--name"]').type(`tester`)
        cy.get('[data-cy="sign-up--email"]').click()
        cy.get('[data-cy="sign-up--email"]').type(`tester@test.com`)
        cy.get('[data-cy="sign-up--password"]').type(`123456`)
        cy.get('[data-cy="sign-up--password-repetition"]').type(` `)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Passwords do not match.')
        cy.get('[data-cy="sign-up--password-repetition"]').type(`123456`)
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('#message-sign-in').should('contain','Select the operator you currently work for in the menu at the top')
    })
})
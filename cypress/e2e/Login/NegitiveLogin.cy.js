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
    ///check for invalid login
    it("should check for invalid login", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Log In").click()
        cy.get('[data-cy="login--email"]').click()
        cy.get('[data-cy="login--email"]').type(` `)
        cy.get('[data-cy="login--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address or username.')
    })

    it("should check for invalid password", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Log In").click()
        cy.get('[data-cy="login--password"]').click()
        cy.get('[data-cy="login--password"]').type(` `)
        cy.get('[data-cy="login--submit"]').click()
        cy.get('#message-sign-in').should('contain','Please enter valid email address or username.')
    })

    it("should check for invalid password lenght", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Log In").click()
        cy.get('[data-cy="login--email"]').type(`1`)
        cy.get('[data-cy="login--password"]').clear()
        cy.get('[data-cy="login--password"]').type(`1`)
        cy.get('[data-cy="login--submit"]').click()
        cy.get('#message-sign-in').should('contain','Enter min. 6 characters for the password.')
    })

    it("should check for travel advisor invalid login", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.get('.ao-header-navigation__dropdown > .ao-header-navigation__dropdown-list--profile > .am-switch__wrapper > [for="travelAdvisor"]').click({force: true})
        cy.contains("Log In").click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(` `)
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain','Required')

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(`1`)
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain','Must be at least 2 characters')

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(`12`)
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain','email must be a valid email')
    })

    it("should check for invalid password", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.get('.ao-header-navigation__dropdown > .ao-header-navigation__dropdown-list--profile > .am-switch__wrapper > [for="travelAdvisor"]').click({force: true})
        cy.contains("Log In").click()

        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain','Required')

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(` `)
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root').should(`contain`,'Must be at least 8 characters')

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(`1`)
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root').should(`contain`,`Must be at least 8 characters`)
    })
})
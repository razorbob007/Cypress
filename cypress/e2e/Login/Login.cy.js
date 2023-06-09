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
    it("should Open the login menu and register", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Sign Up").click()
        Cypress.env('randomValue', `${Date.now()}`)
        const randomString = Cypress.env(`randomValue`)
        cy.get('[data-cy="sign-up--name"]').type(`${randomString}`)
        cy.get('[data-cy="sign-up--name"]').type(`${randomString}`)
        cy.get('[data-cy="sign-up--email"]').type(`${randomString}@gmaill.com`)
        cy.get('[data-cy="sign-up--password"]').type(`password`)
        cy.get('[data-cy="sign-up--password-repetition"]').type(`password`)
        cy.get('#subscribe').click()
        cy.get('[data-cy="sign-up--submit"]').click()
        cy.get('.ao-profile-top__profile-details-email').should('contain',`${randomString}@gmaill.com`)
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get(':nth-child(8) > .ao-header-navigation__dropdown-link') .click()
    })

    ///Open the login menu
    ///Enter email and password to login
    it("should login and logout of website", () => {
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover')
        cy.contains("My Account").should("be.visible")
        cy.contains("Log In").click()

        cy.get('[data-cy="login--email"]').click()
        cy.get('[data-cy="login--email"]').type(`1686216754239@gmaill.com`)
        cy.get('[data-cy="login--password"]').click()
        cy.get('[data-cy="login--password"]').type("password")
        cy.get('[data-cy="login--submit"]').click()
        // My Account
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(2) > .ao-header-navigation__dropdown-link').click()
        cy.get(':nth-child(2) > .ao-profile-breadcrumb-list__breadcrumb-link').should('contain',`My Account`)
        // My Inbox
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(3) > .ao-header-navigation__dropdown-link').click()
        cy.get('.aa-inbox-title').should('contain',`My Inbox`)
        // My Tours
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(4) > .ao-header-navigation__dropdown-link').click()
        cy.get('.aa-inbox-title').should('contain',`My Tours`)
        // My Reviews
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(5) > .ao-header-navigation__dropdown-link').click()
        cy.get('.aa-reviews-title').should('contain',`My Reviews`)
        // Saved Tours
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(6) > .ao-header-navigation__dropdown-link').click()
        cy.get('h1').should('contain',`All Saved Tours`)
        // Account Settings
        cy.get('.ao-header-navigation__profile').click({ force: true })
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(7) > .ao-header-navigation__dropdown-link').click()
        cy.get('.ao-settings-top__title').should('contain',`Account Settings`)
        // Logout
        cy.get('.ao-header-navigation__profile').trigger('mouseover')
        cy.get('.ao-header-navigation__dropdown-list--profile-active > :nth-child(8) > .ao-header-navigation__dropdown-link').click()
    })

})
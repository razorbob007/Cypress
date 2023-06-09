/// <reference types="cypress" />

describe("Open Tourradar website in a browser", () => {
    beforeEach(() => {
      cy.visit("d/europe")
    })

    // Control test fails.
    it("Fail test", () => {
        cy.contains("Australia Tours & Trips").should("be.visible")
    })

    // Check to see if the text is visible.
    it("should display site heading", () => {
        cy.contains("Europe Tours & Trips").should("be.visible")
    })

    // Check to Filter by date.
    it("Filter by date", () => {
        cy.get('[data-cy=serp-filters--duration-upper-sliderpoint]').click({ multiple: true, force: true });
        cy.get('[data-cy=serp-filters--duration-upper-sliderpoint]').type("{leftarrow}{leftarrow}")
        cy.get('.js-serp-parameters__filters-filter').should('contain','Duration is 1 - 19 days')
    })

    // Check to filter by Adventure style.
    it("Filter by Adventure style", () => {
        cy.get('[data-pid="209"] > .ao-serp-filters-checkbox__label').click()
        cy.scrollTo('top')
        cy.contains('Download Brochure').first().click()
        cy.get('[data-cy="common-download-brochure--email-input"]').type('test@gmaill.com')
        cy.get('[data-cy="common-download-brochure--submit"]').click()
        cy.get('#callback_popup > .js-scout-component__modal-dialog > .scout-component__modal-top > .scout-component__modal-heading').should(
            'contain','Brochure successfully sent!')
        cy.get('#callback_popup > .js-scout-component__modal-dialog > .scout-component__modal-top > .scout-component__modal-navigation > .mfp-close').click()
    })

    // Check to sort by Total price: Lowest first.
    it("Sort by Total price: Lowest first", () => {
        cy.get('[data-cy="serp-filters--sort"]').select('Total price: Lowest first')
        cy.get('[data-cy="serp-filters--sort"]').should('contain','Total price: Lowest first')
     })

     // Check to change Language to NL.
     it("Change Language to NL", () => {
        cy.get('.ao-header-navigation__language').trigger('mouseover')
        cy.get('.ao-header-navigation__dropdown-list--language-active > :nth-child(3)').click()
        cy.get('.ao-header-navigation__language').should('contain','NL')
        cy.get('.js-ao-serp-hero__title').should('contain','Europa Rondreizen')
     })

     // Check to combine all tests
     it("Combine all tests", () => {
        // Check to see if the text is visible.
        cy.contains("Europe Tours & Trips").should("be.visible")
        // Check to Filter by date.
        cy.get('[data-cy=serp-filters--duration-upper-sliderpoint]').click({ multiple: true, force: true });
        cy.get('[data-cy=serp-filters--duration-upper-sliderpoint]').type("{leftarrow}{leftarrow}")
        cy.get('.js-serp-parameters__filters-filter').should('contain','Duration is 1 - 19 days')
        // Check to filter by Adventure style.
        cy.get('[data-pid="209"] > .ao-serp-filters-checkbox__label').click()
        cy.scrollTo('top')
        cy.contains('Download Brochure').first().click()
        cy.get('[data-cy="common-download-brochure--email-input"]').type('test@gmaill.com')
        cy.get('[data-cy="common-download-brochure--submit"]').click()
        cy.get('#callback_popup > .js-scout-component__modal-dialog > .scout-component__modal-top > .scout-component__modal-heading').should(
            'contain','Brochure successfully sent!')
        cy.get('#callback_popup > .js-scout-component__modal-dialog > .scout-component__modal-top > .scout-component__modal-navigation > .mfp-close').click()
        // Check to sort by Total price: Lowest first.
        cy.get('[data-cy="serp-filters--sort"]').select('Total price: Lowest first')
        cy.get('[data-cy="serp-filters--sort"]').should('contain','Total price: Lowest first')
        // Check to change Language to NL.
        cy.get('.ao-header-navigation__language').trigger('mouseover')
        cy.get('.ao-header-navigation__dropdown-list--language-active > :nth-child(3)').click()
        cy.get('.ao-header-navigation__language').should('contain','NL')
        cy.get('.js-ao-serp-hero__title').should('contain','Europa Rondreizen')
        // Remove from filter list
        cy.get('div[data-clear="tp"] > .serp-parameters__filters-filter-clear').click()
        // clear all
        cy.get('[data-cy="serp-filters--clear-all"]').click()
     })

 })
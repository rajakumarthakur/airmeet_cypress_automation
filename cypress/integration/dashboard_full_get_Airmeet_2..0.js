describe('Airmeet Smoke test- DashBoard', () => {

  it('Go to Airmeet and register & register Airmeet event"', () => {

    cy.visit('https://demo.airmeet.com/community-manager/4236b770-e72f-4377-a7aa-1320deff9314')
    cy.title('Airmeet: Testing_Security')

   //login
    cy.get('.d-inline-block').click()

    //
    cy.get('.auth-choices > .d-flex > .btn').click()

    cy.get('label').type('rajakumar.thakur18@gmail.com')

    Cypress.log(cy.get('label'))


    cy.get('.mr-1').click()
    cy.get('#password').type('testing@123', {force: true})

    cy.get('[data-testid=form] > .btn').click()

    // Post Login- Operation
    cy.get('a > .d-none').click()
    cy.wait(5000)
    cy.get('.btn > .d-none').click()

    cy.get('.no-style > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1)').click()
    cy.get('.cm-dashboard').click({force: true})

    //Create an airmeet

    cy.wait(2000)

    cy.get('#name').type('test_airmeet')

    cy.get('#description').type('test')

    cy.get(':nth-child(2) > .inner').click()

    cy.get('.form-btn > .btn').click()

    cy.contains('Create this Airmeet').click()

    cy.contains('Add details now').click()

    cy.contains('I will add details later').click()


    const var2= cy.get('.share-link').invoke('text')

    cy.wrap(cy.get('.share-link')).invoke('greeting').should('equal', 'bye')

    cy.log(var2)
    cy.visit(var2.valueOf())

    //cy.get('button[class="close btn-close"]').click({force:true}, {multiple:true})

  })
})
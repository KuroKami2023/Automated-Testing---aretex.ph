const randomstring = require('randomstring');

describe('Home', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('should have contents', () => {
    cy.contains('Home').click()
    cy.url().should('include', '/home')
    cy.get('nav').should('exist');
    cy.get('.bg-hero-image > :nth-child(1)').should('exist')
    cy.get('.bg-hero-image > :nth-child(2)').should('exist')
    cy.get('.bg-hero-image > :nth-child(2) > :nth-child(2)').should('exist')
    cy.get('.bg-hero-image > :nth-child(2) > :nth-child(3)').should('exist')
    cy.get(".md\\:flex-row > :nth-child(2)").should('exist');
    cy.get('.bg-hero-image > :nth-child(4) > :nth-child(1)').should('exist')
    cy.get('.flex-wrap > :nth-child(1) > .w-full').should('exist')
    cy.get('.flex-wrap > :nth-child(2) > .w-full').should('exist')
    cy.get('.flex-wrap > :nth-child(3) > .w-full').should('exist')
  })

  it('should scroll', () => {
    cy.contains('Home').click()
    cy.scrollTo('bottom', { duration: 200 })
    cy.scrollTo('top', { duration: 200 })
  })

  it('should click contact us', () => {
    cy.get('.-mt-20 > .text-center > #forms > .py-4').click()
    cy.url().should('include', '/contacts')
  })
})

describe('About', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('should have contents', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about')
    cy.get('#root > :nth-child(2) > :nth-child(1) > :nth-child(1)').should('exist')
    cy.get(':nth-child(2) > .py-10').should('exist')
    cy.get('#root > :nth-child(2) > :nth-child(1) > .bg-primary > .bg-hero-image > .sm\\:px-16').should('exist')
    cy.get('.-mt-40 > .sm\\:px-16 > :nth-child(2) > .sm\\:px-3').should('exist')
    cy.get('.xl\\:max-w-\\[1280px\\] > .py-6').should('exist')
  })

  it('should scroll', () => {
    cy.contains('About').click();
    cy.scrollTo('bottom', { duration: 200 })
    cy.scrollTo('top', { duration: 200 })
  })
  
  it('should click contact us', () => {
    cy.contains('About').click();
    cy.get('.py-4').click()
    cy.url().should('include', '/contacts')
  })
})


describe('Careers', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('should have contents', () => {
    cy.contains('Careers').click();
    cy.url().should('include', '/careers')
    cy.get('.bg-hero-image > :nth-child(1)').should('exist')
    cy.get('.bg-white.relative > :nth-child(1)').should('exist')
    cy.get('.bg-white.relative > :nth-child(2)').should('exist')
    cy.get('[style="background-color: rgb(50, 68, 156);"] > .sm\\:px-16').should('exist')
    cy.get('.bg-white.sm\\:px-3').should('exist')
  })

  it('should scroll', () => {
    cy.contains('Careers').click();
    cy.scrollTo('bottom', { duration: 200 })
    cy.scrollTo('top', { duration: 200 })
  })
  
  it('should click next (empty textbox) => not yet working', () => {
    cy.contains('Careers').click()
    cy.get('div.submit-error-text').should('not.exist')
  })
})

describe('Contacts', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('should have contents', () => {
    cy.contains('Contacts').click();
    cy.url().should('include', '/contacts')
    cy.get('.bg-hero-image > :nth-child(1)').should('exist')
    cy.get('.-mt-40 > .sm\\:px-16').should('exist')
    cy.get('.xl\\:max-w-\\[1280px\\] > .sm\\:py-16').should('exist')
  })

  it('should scroll', () => {
    cy.contains('Contacts').click();
    cy.scrollTo('bottom', { duration: 200 })
    cy.scrollTo('top', { duration: 200 })
  })

  it('should pass valid details', () => {
    cy.contains('Contacts').click();
    cy.url().should('include', '/contacts')
    cy.get('.mt-12 > :nth-child(1) > .bg-white').type('Testing Message') //full name
    cy.get('.mt-12 > :nth-child(2) > .bg-white').type('+631234567890') // phone number
    cy.get('.mt-12 > :nth-child(2) >.bg-white').invoke('val').should('match', /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    cy.get('.mt-12 > :nth-child(3) >.bg-white').type('testing.email@aretex.com.au') // email
    cy.get('.mt-12 > :nth-child(3) >.bg-white').invoke('val').should('match', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    cy.get('.mt-12 > :nth-child(4) > .bg-white').type(randomstring.generate(20)) //message

    cy.get('.bg-orange-500').click();
    cy.contains('Sending...').should('exist')
    if(cy.get('input').should('exist')) {
      console.log('There is an error sending message...')
    }
    cy.get('.w-40').click();
    cy.get('.relative > .sm\\:px-3 > .flex').should('exist')
  })
})

Cypress.on('after:spec', (attributes) => {
  console.log('Test "%s" has finished in %ds', 
    attributes.title, (attributes.duration / 1000))
})

Cypress.on('after:spec', (results) => {
  if (results) {
    console.log(
      results.totalPassed,
      'out of',
      results.totalTests,
      'passed'
    )
  }
})
/// <reference types="cypress" />

describe('temperature conversion app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a home page', () => {
    cy.contains('Choose what you want to convert!').should('exist');
  });

  it('converts from celsius to fahrenheit', () => {
    cy.contains('Convert celsius to fahrenheit').click();

    cy.get('form input[name=input]').type('100');
    cy.get('form').submit();

    cy.get('[data-test=output]').should('include.text', '100 °C equal');
  });

  it('converts from fahrenheit to celsius', () => {
    cy.contains('Convert fahrenheit to celsius').click();

    cy.get('form input[name=input]').type('100');
    cy.get('form').submit();

    cy.get('[data-test=output]').should('include.text', '100 °F equal');
  });
});

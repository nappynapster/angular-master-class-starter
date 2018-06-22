/// <reference types="Cypress" />


describe('ContactApp', () =>
{
  beforeEach(() =>
  {
    cy.visit('http://localhost:4200/');

  });

  it('it should work', () =>
  {
    cy.get('.mat-list-item').should('have.length', 11);
  });

  it('should go to details', () =>
  {
    cy.get('.mat-list-item').first().click();

    cy.contains('Christoph Burdhof').should('be', true);
  });

});

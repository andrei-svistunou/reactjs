

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'neflixroulett');
  });

  

  it('.should() - does n\'t found films', () => {
    cy.get('#main-search').type('test genre');
    cy.get('input[value="genre"]').click();
    cy.get('.main-search').click();
    cy.contains('No films found');
  });

  it('.should() - found films', () => {
    cy.get('#main-search').type('Drama');
    cy.get('input[value="genre"]').click();
    cy.get('.main-search').click();
    cy.get('.video__list').should('be.visible');
  });
});

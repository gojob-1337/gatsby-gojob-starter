describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Leaving page...', () => {
    it('should navigates to page 2 using the main button', () => {
      cy.get('[data-cy="main-page-exit-button"]').click();

      cy.url().should('have.string', 'details');
      cy.queryByText('Welcome to page 2').should('exist');
    });
  });
});

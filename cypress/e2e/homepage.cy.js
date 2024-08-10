describe('Gemini UI Inspector', () => {
  it('loads the homepage', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');  // Wait for the heading to become visible
    cy.get('h1').should('contain', 'gemini-v1-app'); // Updated to match the app name 
  });
}); 
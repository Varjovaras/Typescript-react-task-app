describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', () => {
    cy.contains('TASK APP');
    cy.get('#input').type('test task');
    cy.get('#submit-button').click();
  });
});

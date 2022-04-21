describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', () => {
    cy.contains('TASK APP');
  });
  it('can add a task', () => {
    cy.get('#input').type('test task');
    cy.get('#submit-button').click();
    cy.contains('test task');
  });
  it('can delete a task', () => {
    cy.get('#input').type('test task');
    cy.get('#submit-button').click();
    cy.get('#delete-button').click();
    cy.contains('test task deleted');
  });
});

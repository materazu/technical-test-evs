import { getAppTitle, getAddUserButton, getUsersList, getUserCard, getAddUserForm, getAddUserFormTitle, getCancelButton, getFirstNameInput, getLastNameInput, getAgeInput, getEmailInput, getSubmitButton, getUserCardName, getUserCardAge, getUserCardEmail } from '../support/app.po';

describe('react-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app title', () => {
    getAppTitle().contains(/Users Manager - EVS/);
  });

  it('should display add user button', () => {
    getAddUserButton().contains(/Add New User/);
  });

  it('should display users list at start without any card', () => {
    getUsersList().should('exist');
    getUserCard().should('not.exist')
  });

  it('should display the form when click on add new user button', () => {
    getAddUserButton().click();
    getAddUserForm().should('exist');
    getAddUserFormTitle().contains(/Add new user/);
  });

  it('should return to the list when click on cancel', () => {
    getAddUserButton().click();
    getAddUserForm().should('exist');

    getCancelButton().should('exist');
    getCancelButton().click();
    getUsersList().should('exist');
  });

  it('should create an user', () => {
    getAddUserButton().click();
    getAddUserForm().should('exist');
    getFirstNameInput().should('exist');
    getLastNameInput().should('exist');
    getAgeInput().should('exist');
    getEmailInput().should('exist');

    getFirstNameInput().type('John');
    getLastNameInput().type('Doe');
    getAgeInput().type('30');
    getEmailInput().type('johndoe@example.com');

    getSubmitButton().should('exist');
    getSubmitButton().click();

    getUsersList().should('exist');
    getUserCard().should('exist');

    getUserCardName().should('contain', 'John Doe');
    getUserCardAge().should('contain', '30 years old');
    getUserCardEmail().should('contain', 'Email: johndoe@example.com');
  });
});

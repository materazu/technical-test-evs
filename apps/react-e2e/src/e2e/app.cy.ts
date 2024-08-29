import { getAppTitle, getAddItemButton, getItemsList, getItemCard, getAddItemForm, getAddItemFormTitle, getCancelButton, getFirstNameInput, getLastNameInput, getAgeInput, getEmailInput, getSubmitButton, getItemCardName, getItemCardAge, getItemCardEmail } from '../support/app.po';

describe('react-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app title', () => {
    getAppTitle().contains(/Items Manager - EVS/);
  });

  it('should display add item button', () => {
    getAddItemButton().contains(/Add New Item/);
  });

  it('should display items list at start without any card', () => {
    getItemsList().should('exist');
    getItemCard().should('not.exist')
  });

  it('should display the form when click on add new item button', () => {
    getAddItemButton().click();
    getAddItemForm().should('exist');
    getAddItemFormTitle().contains(/Add new Item/);
  });

  it('should return to the list when click on cancel', () => {
    getAddItemButton().click();
    getAddItemForm().should('exist');

    getCancelButton().should('exist');
    getCancelButton().click();
    getItemsList().should('exist');
  });

  it('should create an item', () => {
    getAddItemButton().click();
    getAddItemForm().should('exist');
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

    getItemsList().should('exist');
    getItemCard().should('exist');

    getItemCardName().should('contain', 'John Doe');
    getItemCardAge().should('contain', '30 years old');
    getItemCardEmail().should('contain', 'Email: johndoe@example.com');
  });
});

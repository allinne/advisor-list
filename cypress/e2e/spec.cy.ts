/// <reference types="cypress" />
// Lodash is bundled with Cypress
// https://on.cypress.io/bundled-tools
const { _ } = Cypress;
import { PORT, HOST } from '../../src/public-config';
import { LANGUAGES } from '../../src/constants/index';

const host = `http://${HOST}:${PORT}`;

describe('Advisors', () => {
  beforeEach(() => {
    cy.visit(host);
  })

  it('should show 20 advisors', () => {
    cy.get('[data-testid="advisor-item"]').should('have.length', 20);
  });

  it('should filter advisors by online status', () => {
    cy.get('[data-testid="select-status"]')
      .invoke('val', 'online')
      .trigger('change');
    cy.get('[data-testid="advisor-status"]')
      .each((status) => {
        cy.wrap(status).should('have.class', 'advisor-item__status--online');
      });
  });

  it('should filter advisors by offline status', () => {
    cy.get('[data-testid="select-status"]')
      .invoke('val', 'offline')
      .trigger('change');
    cy.get('[data-testid="advisor-status"]')
      .each((status) => {
        cy.wrap(status).should('have.class', 'advisor-item__status--offline');
      });
  });

  it('should filter advisors by language', () => {
    cy.get('[data-testid="select-language"]')
      .invoke('val', 1)
      .trigger('change');
    cy.get('[data-testid="advisor-language"]')
      .each((status) => {
        cy.wrap(status).should('have.text', LANGUAGES[0]);
      });
  });

  it('should sort advisors by review number', () => {
    cy.get('[data-testid="filter-reviews"]').click();

    const toStrings = (cells$) => _.map(cells$, 'textContent');
    const toNumbers = (prices) => _.map(prices, Number);

    cy.get('[data-testid="advisor-reviews"]')
      .then(toStrings)
      .then(toNumbers)
      .then((prices) => {
        const sorted = _.sortBy(prices).reverse();

        expect(prices, 'cells are sorted 📈').to.deep.equal(sorted);
      });

    cy.get('[data-testid="filter-reviews"]').click();

    cy.get('[data-testid="advisor-reviews"]')
      .then(toStrings)
      .then(toNumbers)
      .then((prices) => {
        const sorted = _.sortBy(prices);

        expect(prices, 'cells are sorted 📈').to.deep.equal(sorted);
      });
  });
});

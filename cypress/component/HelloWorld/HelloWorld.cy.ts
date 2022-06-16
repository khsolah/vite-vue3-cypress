import { mount } from '@cypress/vue'
import HelloWorld from '~/components/HelloWorld.vue'

describe('[Component]: HelloWorld', () => {
  beforeEach(() => {
    mount(HelloWorld, { props: { msg: 'Hello, Cypress!' } })
  })

  it('should render msg when mounting component', () => {
    cy.get('h1')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Hello, Cypress!')
  })

  it('should increase value when clicking on ˝', () => {
    cy.contains('count is: ')
      .should('exist')
      .and('contain.text', 'count is: 0')
      .click()
      .should('exist')
      .and('contain.text', 'count is: 1')
  })

  it('should render some anchor tags', () => {
    ['VS Code', 'Volar', 'Vite Docs', 'Vue 3 Docs'].forEach((value) => {
      cy.contains(value)
        .should('exist')
        .should('have.attr', 'target')
        .and('eq', '_blank')
    })
  })
})

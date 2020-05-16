## create project react typescript
create-react-app cra-cypress --typescript

##  yarn cypress.io
yarn add cypress

## add scripts to file package.json 

// package.json
"scripts": {
  "cypress": "cypress"
}

## generate folder && cypress gui
yarn cypress open 

## rm examples
rm -rf cypress/integration/examples

## create spec.js
touch cypress/integration/spec.js

## spec.js
`
describe('CRA', () => {
    it('shows learn link', function () {
      cy.visit('http://localhost:3000')
      cy.get('.App-link').should('be.visible')
        .and('have.text', 'Learn React')
    })
  })
`

## error cy

yarn add eslint-plugin-cypress --save-dev
touch cypress/.eslintrc.json

/.eslintrc.json
`
{
    "plugins": ["cypress"],
    "parser": "babel-eslint"
}
`
  
## run localhost:3000
yarn start 

## open cypress
yarn run cypress open


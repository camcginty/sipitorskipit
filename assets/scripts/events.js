const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const toggle = function () {
  $('.signed-in-view').hide()
  // $('#signOut').hide()
  // $('#mySippedDrinks').hide()
  // $('#changePassword').hide()
}

const onGetRecipes = function (event) {
  event.preventDefault()
  authApi.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('card data is ', data)
  authApi.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
    .then(sipClickRandomDrink)
}

// 3p API event

const sipClickRandomDrink = function () {
  authApi.getDrink()
    .then(ui.getDrinkSuccess)
    .catch(ui.getDrinkFail)
}

const randomDrink = function (event) {
  event.preventDefault()
  authApi.getDrink()
    .then(ui.getDrinkSuccess)
    .catch(ui.getDrinkFail)
}

// Auth Events

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
    .then(sipClickRandomDrink)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  randomDrink,
  onCreateRecipe,
  toggle,
  onGetRecipes
}

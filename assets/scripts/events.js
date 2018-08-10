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

const recipeUpdate = function () {
  authApi.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
    .then(sipClickRandomDrink)
}

const onDestroyRecipe = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  authApi.destroyRecipe(data)
    .then(ui.destroyRecipeSuccess)
    .then(recipeUpdate)
    .catch(ui.destroyRecipeFailure)
}
const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(this).data('id')
  authApi.updateRecipe(data, id)
    .then(ui.updateRecipeSuccess)
    .then(recipeUpdate)
    .catch(ui.updateRecipeFail)
}
const showUpdateForm = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  $('.handlebars-form-hider-' + data).show()
  $('.handlebars-display-' + data).hide()
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
  onGetRecipes,
  onUpdateRecipe,
  onDestroyRecipe,
  showUpdateForm
}

const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  // $('.SignUpFeedback').html('You have successfully registered.')
  $('#success').modal()
  $('#signUpForm')[0].reset()
}

const signUpError = function () {
  // $('.signUpFeedback').html('Email unavailable or password mismatch.')
  $('#sign-up-fail').modal()
  $('#signUpForm')[0].reset()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('.signInFeedback').html('')
  // $('#sign-in-form').toggle()
  // $('#change-password-form').toggle()
  // $('#sign-out-button').toggle()
  // $('#sign-up-form').toggle()
  $('.emailDisplay').html('Signed in as: ' + store.user.email)
  $('#signInForm')[0].reset()
  // $('.signed-in-view').toggle()
  // $('.signed-out-view').toggle()
}

const signInError = function (error) {
  // $('.signInFeedback').html('Username or password is incorrect.')
  $('#sign-in-fail').modal()
  $('#signInForm')[0].reset()
  console.error(error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  // $('.changePasswordFeedback').html('You have successfully changed your password.')
  $('#success').modal()
  $('#password_change')[0].reset()
}

const changePasswordError = function () {
  // $('.changePasswordFeedback').html('Current password is incorrect.')
  $('#password-fail').modal()
  $('#password_change')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  // $('#sign-in-form').toggle()
  // $('#change-password-form').toggle()
  // $('#sign-out-button').toggle()
  // $('#sign-up-form').toggle()
  $('.createRestaurantFeedback').html('')
  $('.emailDisplay').html('')
  $('.signInFeedback').html('')
  $('.ChangePasswordFeedback').html('')
  $('.SignUpFeedback').html('')
  // $('.signed-in-view').toggle()
  // $('.signed-out-view').toggle()
  $('#password_change')[0].reset()
  $('#signUpForm')[0].reset()
  delete store.user
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess,
  changePasswordError
}

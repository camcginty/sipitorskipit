'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUpForm').on('submit', events.onSignUp)
  $('#signInForm').on('submit', events.onSignIn)
  $('#password_change').on('submit', events.onChangePassword)
  $('#sign-out').click(events.onSignOut)
})

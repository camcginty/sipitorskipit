'use strict'

const config = require('./config.js')
const store = require('./store')

// Recipe CRUD

const createRecipe = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getRecipes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (data, id) {
  console.log('api id is ', id)
  console.log('api data is', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyRecipe = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// 3p API call

const getDrink = function () {
  console.log('hi')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/random',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Auth requests below
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword,
  getDrink,
  createRecipe,
  updateRecipe,
  destroyRecipe,
  getRecipes
}

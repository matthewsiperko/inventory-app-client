'use strict'
const authEvents  = require('../scripts/auth/events'),
listEvents        = require('../scripts/lists/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  listEvents.onPageLoad()
  listEvents.addHandlers()
  // AUTH 
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.log-out').on('click', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onChangePassword)
  
  // MODALS 
  $('.modal-close').on('click', listEvents.closeModal)
  $('.close-change').on('click', listEvents.closeChangeModal)
  $('#log-in-modal').on('click', listEvents.logInModal)
  $('#sign-up-link').on('click', listEvents.signUpModal)
  $('#change-password-link').on('click', listEvents.changePasswordModal)
  $('.close-update').on('click', listEvents.closeUpdateModal)

  // LIST EVENTS
  $('.content').on('click', '.delete-btn', listEvents.onDeleteList)
  $('.content').on('click', '.update-btn-link', listEvents.onUpdateForm)
  $('#list-index').on('click', listEvents.onShowLists)
  $('.create-form').on('submit', listEvents.onCreateList)
})

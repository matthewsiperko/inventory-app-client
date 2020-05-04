const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let updateId 


// LIST EVENTS
const onShowLists = function(event) {
    event.preventDefault()
    api.getLists()
        .then(ui.showListSuccess)
        .catch(ui.showListFailure)
}

const onCreateList = function(event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.createList(data)
        .then(() => onShowLists(event))
        .catch(ui.createListFailure)
}

const onDeleteList = function(event) {
    const id = $(event.target).data('id')
    api.deleteList(id)
      .then(() => onShowLists(event))
      .catch(console.error)
  }

const onUpdateForm = function(event) {
    event.preventDefault()
    $('.create-form').addClass('hidden')
    $('.update-form').removeClass('hidden')
    updateId = $(event.target).data('id')
}


const onUpdateList = function(event) {
    event.preventDefault()
    const id = updateId
    const data = getFormFields(event.target)
    api.updateList(data, id)
        .then(() => onShowLists(event))
        .then(ui.updateSuccess)
        .catch(ui.updateFailure)
}

// MODALS 
const logInModal = function(event) {
    event.preventDefault()
    $('.modal-bg').addClass('bg-active')
}

const signUpModal = function(event) {
   event.preventDefault()
   $('.modal-bg').removeClass('bg-active')
   $('.modal-bg-up').addClass('bg-active')
}

const closeModal = function(event) {
    event.preventDefault()
    $('.modal-bg-up').removeClass('bg-active')
    $('.modal-bg').addClass('bg-active')
}

const closeChangeModal = function(event) {
    event.preventDefault()
    $('.modal-bg-change').removeClass('bg-active')
    $('.modal-bg').removeClass('bg-active')
}

const closeUpdateModal = function(event) {
    event.preventDefault()
    $('.update-form').addClass('hidden')
    $('.create-form').removeClass('hidden')
    $('.modal-bg').removeClass('bg-active')
}

const changePasswordModal = function(event) {
    event.preventDefault()
    $('.index').hide()
    $('.modal-bg-change').addClass('bg-active')
}

const onPageLoad = function() {
    $('.success-msg').hide()
    $('.failure-msg').hide()
    $('.index').hide()
    $('.logged-in').hide()
    $('.modal-bg').addClass('bg-active')
    $('#sign-up-link').show()
}

const addHandlers = function() {
    $('.update-form').on('submit', onUpdateList)
}

module.exports = {
    logInModal,
    signUpModal,
    closeModal,
    changePasswordModal,
    closeChangeModal,
    closeUpdateModal,
    onPageLoad,
    onShowLists,
    onCreateList,
    onDeleteList,
    onUpdateList,
    onUpdateForm,
    addHandlers
}
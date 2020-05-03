const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


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
    $('.update-form').fadeIn('fast', () => {
        $('.update-form').addClass('green')
        $('.update-form').delay(2000).removeClass('green')
    })
}

const onUpdateList = function(event) {
    event.preventDefault()
    const id = $(event.target).data('id')
    const data = getFormFields(event.target)
    api.updateList(data, id)
        .then()
        .catch()
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

const onPageLoad = function() {
    $('.success-msg').hide()
    $('.failure-msg').hide()
    $('.index').hide()
    $('.logged-in').hide()
    $('.modal-bg').addClass('bg-active')
}

module.exports = {
    logInModal,
    signUpModal,
    onPageLoad,
    onShowLists,
    onCreateList,
    onDeleteList,
    onUpdateList,
    onUpdateForm
}
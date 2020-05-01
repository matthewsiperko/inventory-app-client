const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


// MODALS 
const logInModal = function(event) {
    event.preventDefault()
    $('.modal-bg').addClass('bg-active')
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
    onPageLoad
}
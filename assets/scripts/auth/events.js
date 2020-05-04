const getFormFields = require('../../../lib/get-form-fields'),
api                 = require('./api'),
ui                  = require('./ui')


const onSignUp = function(event){
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function(event){
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
}

const onChangePassword = function(event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data)
    .then(ui.changePasswordsuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function(event) {
    event.preventDefault()
    api.signOut()
        .then(ui.signOutSuccess)
        .catch(ui.signOutFailure)
}


module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword
}
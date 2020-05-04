const store         = require('../store')


const signUpSuccess = function(data){
   $('.input').val('')
   $('.success-msg').fadeIn('fast', () => {
    $('.success-msg').delay(500).fadeOut()
})
$('.success-msg h3').text('You signed Up successfully! Please Log In.')
}
   

const signUpFailure = function(error){
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(500).fadeOut()
    })
    $('.failure-msg h3').text('Sign Up failed. Please try again.')
    
}

const signInSuccess = function(data){
    store.user = data.user
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(250).fadeOut()
    })
    $('.success-msg h3').text('You signed in successfully!')
    $('.modal-bg').removeClass('bg-active')
    $('.user-display').text(`Welcome: ${store.user.email}!`)
    $('.logged-in').show()
    $('#sign-up-link').hide()
    $('.input').val('')
}

const signInFailure = function(error){
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(500).fadeOut()
    })
    $('.failure-msg h3').text('Log in failed. Please try again.')
}

const signOutSuccess = function(data) {
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(500).fadeOut()
    })
    $('.success-msg h3').text('You signed out successfully!')
    $('.index').hide()
    $('.modal-bg').addClass('bg-active')
    $('.user-display').text(`Welcome: to Inventory!`)
    $('.logged-in').hide()
    $('#sign-up-link').show()
}

const signOutFailure = function(error) {
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(500).fadeOut()
    })
    $('.failure-msg h3').text('Sign Out Failed. Please try again.')
}

const changePasswordSuccess = function(data) {
    $('.input').val('')
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(500).fadeOut()
    })
    $('.success-msg h3').text('Password Change Success!')
    $('.modal-bg-change').removeClass('bg-active')
}

const changePasswordFailure = function(error) {
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(500).fadeOut()
    })
    $('.failure-msg h3').text('Password Change Failed. Please try again.')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure
}
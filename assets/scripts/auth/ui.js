const store         = require('../store')


const signUpSuccess = function(data){
   $('.input').val('')
}

const signUpFailure = function(error){
    $('.input').val('')
}

const signInSuccess = function(data){
    store.user = data.user
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(1000).fadeOut()
    })
    $('.success-msg h3').text('You signed in successfully!')
    $('.modal-bg').removeClass('bg-active')
    $('.user-display').text(`Welcome: ${store.user.email}!`)
    $('.logged-in').show()
    $('.input').val('')
}

const signInFailure = function(error){
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(1000).fadeOut()
    })
    $('.failure-msg h3').text('Log in failed. Please try again.')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure
}
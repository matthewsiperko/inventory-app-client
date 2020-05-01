
const config    = require('../config.js'),
store           = require('../store.js')


const signUp = data => {
    return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
    })
}

const signIn = function(data){
    return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: "POST",
    data: data
    })
}

module.exports = {
    signUp,
    signIn
}
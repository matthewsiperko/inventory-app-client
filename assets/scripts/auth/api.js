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

const signOut = function () {
    return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

    const changePassword = function (data) {
      return $.ajax({
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data
      })
    }



module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword
}
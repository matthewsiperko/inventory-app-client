const indexTemplate = require('../templates/index-template.handlebars')

const showListSuccess = function(data) {
    console.log(data)
    const indexHtml = indexTemplate({ lists: data.lists })
    $('.index').show()
    $('.content').html(indexHtml)
    $('.input').val('')
}

const showListFailure = function(error) {
 $('.input').val('')
}

const createListSuccess = function(data) {
    $('.input').val('')
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(250).fadeOut()
    })
    $('.success-msg h3').text('Item Created!')
}

const createListFailure = function() {
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(250).fadeOut()
    })
    $('.failure-msg h3').text('Couldn\'t create item. Please try again.')
}

module.exports = {
    showListSuccess,
    showListFailure,
    createListSuccess,
    createListFailure
}
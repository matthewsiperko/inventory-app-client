const indexTemplate = require('../templates/index-template.handlebars')

const showListSuccess = function(data) {
    $('.index').show()
    if(data.items.length === 0) {
        $('.items-display').hide()
    } else {
        const indexHtml = indexTemplate({ items: data.items })
        $('.content').html(indexHtml)
    }
    $('.input').val('')
}


const showListFailure = function(error) {
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(800).fadeOut()
    })
    $('.failure-msg h3').text('Couldn\'t find items. Please try again.')
}

const createListSuccess = function(data) {
    $('.input').val('')
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(800).fadeOut()
    })
    $('.success-msg h3').text('Item Created!')
}

const createListFailure = function() {
    $('.input').val('')
    $('.failure-msg').fadeIn('fast', () => {
        $('.failure-msg').delay(800).fadeOut()
    })
    $('.failure-msg h3').text('Couldn\'t create item. Please try again.')
}

const updateSuccess = function() {
    $('.input').val('')
    $('.success-msg').fadeIn('fast', () => {
        $('.success-msg').delay(800).fadeOut()
    })
    $('.success-msg h3').text('Item Updated!')
    $('.update-form').addClass('hidden')
    $('.create-form').removeClass('hidden')
    $('.modal-bg').removeClass('bg-active')
}

module.exports = {
    showListSuccess,
    showListFailure,
    createListSuccess,
    createListFailure,
    updateSuccess
}
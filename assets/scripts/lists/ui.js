const indexTemplate = require('../templates/index-template.handlebars')

const showListSuccess = function(data) {
    console.log(data)
    const indexHtml = indexTemplate({ lists: data.lists })
    $('.index').show()
    $('.content').html(indexHtml)
}

const showListFailure = function() {

}

module.exports = {
    showListSuccess,
    showListFailure
}
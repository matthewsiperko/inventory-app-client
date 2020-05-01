const store = require('../store')
const config = require('../config')

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists'
  })
}

const showList = function(id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'GET',
    headers: {
        Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = function(data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
    getLists,
    showList,
    createList
}
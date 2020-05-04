const store = require('../store')
const config = require('../config')



const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const deleteList = function(id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
} 


module.exports = {
    getLists,
    showList,
    createList,
    deleteList,
    updateList
}
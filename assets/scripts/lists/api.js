const store = require('../store')
const config = require('../config')



const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
} 

const showList = function(id) {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
    method: 'GET',
    headers: {
        Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = function(data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteList = function(id) {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
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
//Internal dependencies
const create = require('./create')
const update = require('./update') 
const findAll = require('./findAll') 
const findById = require('./findById') 
const deleteOne = require('./delete') 
const deleteAll = require('./deleteAll')

module.exports = {
    create: create, 
    update: update, 
    findAll: findAll, 
    findById: findById, 
    deleteOne: deleteOne, 
    deleteAll: deleteAll
}
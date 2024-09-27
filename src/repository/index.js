// this file has one job it return all repository as object so that when we want to use them we dont have to write multiple require statement

const cityRepository = require("./city-repository");

module.exports={
    cityRepository:require('./city-repository')
}
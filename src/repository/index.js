// this file has one job it return all repository as object so that when we want to use them we dont have to write multiple require statement

// const AirplaneRepository = require('./airplane-repository');
// const FlightRepository = require('./flight-repository');



module.exports={
    CityRepository:require('./city-repository'),
    // AirportRepository:require('./airport-repository'),
    FlightRepository:require('./flight-repository'),
    AirplaneRepository:require('./airplane-repository')
}
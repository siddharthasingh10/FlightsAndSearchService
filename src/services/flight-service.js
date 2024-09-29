const airplane = require('../models/airplane');
const { FlightRepository, AirplaneRepository } = require('../repository/index')

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository

    }
    async createFlight(data) {

        try {
            console.log('here')
            // fetching airplane cause we need seat available in it in upcoming data airplaneid will be mention so extract that airplane   
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            //while creating a flight the totalseat is fetched from airplane so we need that airplane and then airplane.capacity will give totalSeat

          
        const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        }
        catch (error) {
            console.log(error)
            console.log('Something wrong in repo flight layer')
            throw { error }
        }
    }
}
module.exports=FlightService;

//data need to make a flight
// flightNumber
// airplaneId
// departureAirportId
// arrivalairportId
// arrivalTime
// departuretime
// Price
// totalseat-> ariplane
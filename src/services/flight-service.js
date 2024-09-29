const airplane = require('../models/airplane');
const { FlightRepository, AirplaneRepository } = require('../repository/index')
const dateCompare=require('../utils/helper');
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository

    }
    async createFlight(data) {
        // in data we are getting
// flightNumber airplaneId departureAirportId arrivalairportId arrivalTime departuretime Price totalseat-> ariplane
        try {
           if(!dateCompare(data.arrivalTime,data.departureTime)) throw{error:'arrival can not be less than daparture'}
            // fetching airplane cause we need seat available in it in upcoming data airplaneid will be mention so extract that airplane   
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            //while creating a flight the totalseat is fetched from airplane so we need that airplane and then airplane.capacity will give totalSeat

          
        const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        }
        catch (error) {
            console.log(error)
            console.log('Something wrong in repo flight layer in createflight')
            throw { error }
        }
    }

    async getFlight(flightId){
        try{
            const flight=await this.flightRepository.getFlight(flightId)
            return flight;
        }catch(error){
            console.log('Something wrong in service flight layer in getone')
            throw{error}
        }
    }
    async getAllFlight(){
        try{
            const flight=await this.flightRepository.getFlight()
            return flight;
        }catch(error){
            console.log('Something wrong in service flight layer in getall')
            throw{error}
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
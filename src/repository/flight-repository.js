const{Flights}=require('./../models/index');
class FlightRepository{

    async createFlight(data){
        try{
            const flight=await Flights.create(data)
            return flight;
        }catch(error){
            console.log('Something wrong in repo flight layer in creating')
            throw{error}
        }

    }
    async getFlight(flightId){
        try{
            const flight=await Flights.findByPk(flightId)
            return flight;
        }catch(error){
            console.log('Something wrong in repo flight layer in get one')
            throw{error}
        }

    }
    async getAllFlights(filter){
        try{
            const flight=await Flights.findAll({
                where:filter
            })
            return flight;
        }catch(error){
            console.log('Something wrong in repo flight layer in get all one')
            throw{error}
        }

    }


}
module.exports=FlightRepository;
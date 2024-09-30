const { FlightRepository, AirplaneRepository } = require('../repository/index');
const dateCompare = require('../utils/helper');
const { Op } = require('sequelize');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository(); // Add parentheses to instantiate
    }

    // Defining a private method to create a filter
    #createFilter(data) {
        let filter = {};

        // Add arrivalAirportId to the filter object if provided
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        // Add departureAirportId to the filter object if provided
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // Extract minPrice and maxPrice from data
        const { minPrice, maxPrice } = data;

        // Add price filter
        if (minPrice && maxPrice) {
            // For a range of price
            filter.price = { [Op.between]: [minPrice, maxPrice] };
        } else if (minPrice) {
            // For minimum price
            filter.price = { [Op.gte]: minPrice };
        } else if (maxPrice) {
            // For maximum price
            filter.price = { [Op.lte]: maxPrice };
        }

        return filter;
    }

    async createFlight(data) {
        // We are getting flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, totalSeats -> airplane
        try {
            if (!dateCompare(data.arrivalTime, data.departureTime)) throw { error: 'Arrival time cannot be earlier than departure time' };

            // Fetch airplane details to get the seat capacity
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);

            // Create flight with the total seat count fetched from airplane capacity
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });

            return flight;
        } catch (error) {
            console.log('Something went wrong in the FlightService layer (createFlight)');
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong in the FlightService layer (getFlight)');
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            // Create the filter object using private method
            const filterObject = this.#createFilter(filter);


            // Use repository method to fetch all flights based on filter
            const flights = await this.flightRepository.getAllFlights(filterObject);

            return flights;
        } catch (error) {
            console.log('Something went wrong in the FlightService layer (getAllFlights)');
            throw { error };
        }
    }
}

module.exports = FlightService;


//data need to make a flight
// flightNumber
// airplaneId
// departureAirportId
// arrivalairportId
// arrivalTime
// departuretime
// Price
// totalseat-> ariplane
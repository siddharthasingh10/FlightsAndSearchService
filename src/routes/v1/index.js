const express=require('express');
const CityController=require( '../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');
const FlightController=require('../../controllers/flight-contoller')
const router=express.Router();


//ALL THE CITY ROUTES//
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

//ALL THE AIRPORT ROUTES//
// router.post('/airports',AirportController.create);

// router.delete('/airport/:id',AirportController.destroy);
// router.get('/airport/:id', AirportController.get);
// router.patch('/airport/:id',AirportController.update);
// router.get('/airport',AirportController.getAll);

//ALL THE FLIGHT ROUTES 
router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);




module.exports=router;
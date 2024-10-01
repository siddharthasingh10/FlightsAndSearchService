
const {FlightService}=require('./../services/index');
const flightService=new FlightService();

const create=async(req,res)=>{
    try{
        // destructre all the mandatory data {what if user pass any extra req.body that we dont want }
        const flightData={
            //this are all the value that we are exprecting form req.body
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            price:req.body.price,
            departureTime:req.body.departureTime,
            arrivalTime:req.body.arrivalTime
        }
        const flight=await flightService.createFlight(flightData);
        res.status(201).json({
            data:flight,
            success:true,
            message:'successfully created a flight'
        })
    }
    catch(error){
        res.status(500).json({
            data:{},
            success:false,
            message:'failed to create a flight',
            err:{error}
        })

    }


}
const get=async(req,res)=>{
    try{
        const flight=await flightService.getFlight(req.params.id);
        res.status(201).json({
            data:flight,
            success:true,
            message:'successfully fetched a flight'
        })
    }
    catch(error){
        res.status(500).json({
            data:{},
            success:false,
            message:'failed to fetched a flight',
            err:{error}
        })

    }


}
const getAll=async(req,res)=>{
    try{
        const flight=await flightService.getAllFlights(req.query);
        res.status(201).json({
            result:flight.length,
            data:flight,
            success:true,
            message:'successfully fetched all flight'
        })
    }
    catch(error){
        res.status(500).json({
            
            data:{},
            success:false,
            message:'failed to fetched all flight',
            err:{error}
        })

    }


}
module.exports={
    create,
    getAll,get
}
const validateCreateFlights=(req,res,next)=>{
if(  !req.body.flightNumber || !req.body.airplaneId ||   !req.body.departureAirportId ||!req.body.arrivalAirportId ||!req.body.price ||!req.body.departureTime || !req.body.arrivalTime  ){


        //if any of the things is missing then

        return res.status(400).json({
            data:{},
            success:false,
            messgae:'invalid request body for create flight ',
            err:'Missing  mandatory properties to create a flight'
        })

}
next(); 

}
module.exports={
    validateCreateFlights
}
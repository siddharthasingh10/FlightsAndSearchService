
const {FlightService}=require('./../services/index');
const flightService=new FlightService();

const create=async(req,res)=>{
    try{
        const flight=await flightService.createFlight(req.body);
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
module.exports={
    create
}
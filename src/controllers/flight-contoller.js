
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
        const flight=await flightService.getFlight();
        res.status(201).json({
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
    create
}
// const { AirportService } = require('./../services/index')
// const airportService = new AirportService();
const create = async (req, res) => {
    try {
        const response = await airportService.create(req.bdoy)
        res.status(201).json({
            data: response,
            message: 'sucess to create',
            err: {},
            success: true

        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            data: {},
            error: error,
            success: false,
            message: 'failed to create '
        })
    }

}
exports.module = {
    create
}

// const {AirportService}=require('./../services/airport-service');

// const airportService=new AirportService();

// const create=async(req,res)=>{
//     try{
//         const airport=await airportService.createAirport(req.body);
//         return res.status(201).json({
//             data:airport,
//             message:"successfully created an airport",
//             success:true,
//             error:{}
//         })

//     }
//     catch(error){

//         console.log(error);
//                 return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'not able to create a airport',
//                     err:error
//                 })

//     }
// }
// const destroy=async(req,res)=>{
//     try{
//         const response=await airportService.deleteAirport(req.params.id);
//         return res.status(201).json({
//             data:response,
//             message:"successfully delete an airport",
//             success:true,
//             error:{}
//         })

//     }
//     catch(error){

//         console.log(error);
//                 return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'not able to delete a airport',
//                     err:error
//                 })

//     }
// }
// const update=async(req,res)=>{
//     try{
//         const airport=await airportService.updateAirport(req.params.id,req.body);
//         return res.status(201).json({
//             data:airport,
//             message:"successfully updated an airport",
//             success:true,
//             error:{}
//         })

//     }
//     catch(error){

//         console.log(error);
//                 return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'not able to update a airport',
//                     err:error
//                 })

//     }
// }
// const get=async(req,res)=>{
//     try{
//         const airport=await airportService.getAirport(req.params.id);
//         return res.status(201).json({
//             data:airport,
//             message:"successfully fetched an airport",
//             success:true,
//             error:{}
//         })

//     }
//     catch(error){

//         console.log(error);
//                 return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'not able to fetched a airport',
//                     err:error
//                 })

//     }
// }
// const getAll=async(req,res)=>{
//     try{
//         const airport=await airportService.getAllAirport(req.query);
//         return res.status(201).json({
//             result:airport.length,
//             data:airport,
//             message:"successfully fetched all airport",
//             success:true,
//             error:{}
//         })

//     }
//     catch(error){

//         console.log(error);
//                 return res.status(500).json({
//                     data:{},
//                     success:false,
//                     message:'not able to fetched all airport',
//                     err:error
//                 })

//     }
// }
// module.exports={
//     create,destroy,update,get,getAll
// }
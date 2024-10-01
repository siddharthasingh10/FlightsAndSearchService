const {AirportRepository}=require('../repository/index')

class AirportService{
    constructor(){
       this.airportRepository=new AirportRepository();
    }


async createAirport(data){
    try{
        const airport=await this.airportRepository.createAirport(data);
        return airport;
        
    }catch(error){
            console.log('somehting wrong in service layer of airport')
        throw{error}
    }
   



    }

// async deleteAirport(airportId){
//     try{
//         const response=await this.airportRepository.deleteAirport(airportId);
//         return response;

//     }catch(error){
//             console.log('somehting wrong in service layer of airport')
//         throw{error}
//     }
   



//     }
// async updateAirport(airportId,data){
//     try{
//         const airport=await this.airportRepository.updateAirport(airportId,data);
//         return airport;

//     }catch(error){
//             console.log('somehting wrong in service layer of airport')
//         throw{error}
//     }
   



//     }
// async getAirport(airportId){
//     try{
//         const airport=await this.airportRepository.getAirport(airportId);
//         return airport;

//     }catch(error){
//             console.log('somehting wrong in service layer of airport')
//         throw{error}
//     }
   



//     }
// async createAirport(filter){
//     try{
//         const airport=await this.airportRepository.getAllAirport(filter);
//         return airport;

//     }catch(error){
//             console.log('somehting wrong in service layer of airport')
//         throw{error}
//     }
   



//     }

}
module.exports=AirportService;

//using crud service

// const {CrudService}=require('./crud-service')


// class AirportService extends CrudService{
//     constructor(){
//         const airportRepository=new AirportRepository();
//         super(airportRepository);

//     }

// }
// module.exports=AirportService;  
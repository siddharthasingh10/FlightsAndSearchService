
const {Airport}=require('./../models/index');
const {Op}=require('sequelize')

class AirportRepository{
    async createAirport(data){
        try{
            const airport=await Airport.create(data);
            return airport;


        }catch(error){
                console.log('Something wrong happened at airport repo layer')
                throw {error}
        }
    }
    async deleteAirport(airportId){
        try{
          await Airport.destroy({
            where:{
                id:cityId
            }
          });
            return true;


        }catch(error){
                console.log('Something wrong happened at airport repo layer')
                throw {error}
        }
    }
    async getAllAirport(filter){
        try{
            if(filter.name){
                    const airport=await Airport.find({
                        where:{
                            name:{ // filteraion for name only
                                [Op.startsWith]:filter.name
                            }
                          
                        }
                    })
                    return airport
            }
          const airport=await Airport.getAll();
            return airport;


        }catch(error){
                console.log('Something wrong happened at airport repo layer')
                throw {error}
        }
    }
    async getAirport(airportId){
        try{
          const airport=await Airport.getOne({
            where:{
                id:airportId
            }
          });
            return airport;


        }catch(error){
                console.log('Something wrong happened at airport repo layer')
                throw {error}
        }
    }
    async updateAirport(airportId,data){
        try{
        const airport=await Airport.findByPk(airportId);
        if(data.name) airport.name=data.name
       if(data.address) airport.address=data.address
       if(data.cityId) airport.cityId=data.cityId

       airport.save();
       return airport;

        }catch(error){
                console.log('Something wrong happened at airport repo layer')
                throw {error}
        }
    }

}
module.exports=AirportRepository;

// const {CrudRepository} = require('./crud-repository');

// const {Airport}=require('./../models/airport')
// // using crud-repo
// class AirportRepository extends CrudRepository{
//     constructor(){
   
//         super(Airport);
//     }
// }
// module.exports=AirportRepository;

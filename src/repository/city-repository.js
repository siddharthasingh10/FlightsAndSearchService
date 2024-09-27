
const {City}=require('../models/index')

class CityRepository{

    async createCity({name}){
    try{
        console.log('city here')
        const city=await City.create({name});
       
        return city; 
    }
    catch(error){
        console.log('somethinh happended wrong in repository level')
        throw {error};
    }
    }
    async deleteCity(cityId){
        try{
                await City.destroy({
                    where:{
                        id:cityId
                    }
                })
                return true;

        }
        catch(error){
            console.log('somethinh happended wrong in repository level')
            throw {error};
        }

    }   
    async getCity({cityId}){
        try{
            
               const city= await City.findOne({
                    where:{
                        id:cityId
                    }
                })
                return city;

        }
        catch(error){
            console.log('somethinh happended wrong in repository level')
            throw {error};
        }

    }
    async updateCity(cityId,data){
        try{
                const city=await City.update(data,{
                    where:{
                        id:cityId
                    }
                })
                    return city;
        }
        catch(error){
            console.log('somethinh happended wrong in repository level')
            throw {error};
        }

    }
}
module.exports=CityRepository;
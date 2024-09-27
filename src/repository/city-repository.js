// all the models can be also accesed from ../models/index so we can also write const {City}=require('../models/index')
const {City}=require('../models/city')

class cityRepository{

    async createCity({name}){
    try{
        const city=await City.create({name});
        return city; 
    }
    catch(error){
        console.log('somethinh happended wrong in repository level')
        throw {error};
    }
    }
    async deleteCity({cityId}){
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
module.exports=cityRepository;
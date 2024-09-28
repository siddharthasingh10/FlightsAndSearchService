
const {City}=require('../models/index')

class CityRepository{

    async createCity(data){
    try{
        console.log('city here')
        const city=await City.create(data);
       
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
    async getCity(cityId){
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
             // below both method will work , first one will not return updated object

                // const city=await City.update(data,{
                //     where:{
                //         id:cityId
                //     }, 
                //     returning:true,// to show updation is done      
                //     plain:true
                // })

            // this method is used to show which data is updaed in postman
                
            const city=await City.findByPk(cityId);
                city.name=data.name
                city.save();

                    return city;
        }
        catch(error){
            console.log('somethinh happended wrong in repository level')
            throw {error};
        }

    }
    async getAllCity(){
        try{
            const city=await City.findAll();
            return city;
        }
        catch(error){
            console.log('something wrong in repo layer');
            throw {error}
        }
      
    }
}
module.exports=CityRepository;
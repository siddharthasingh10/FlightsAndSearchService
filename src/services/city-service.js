const {CityRepository}=require('../repository/index'); 

class cityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            
                const city= await this.cityRepository.createCity(data);
               

                return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
    async deleteCity(cityId){
        try{
               const response= await this.cityrepository.deleteCity(cityId);
                return response;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await this.cityrepository.updateCity(cityId,data);
            return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
    async getCity(cityId){
        try{
        const city=await this.cityrepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw {error}
        }
    }
}

module.exports=cityService;
const {CityRepository}=require('../repository/index'); 

class cityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }

    async createCity(data){
        try{
                const city= await this.cityRepository.create(data);
                return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw 
        }
    }
    async deleteCity(cityId){
        try{
                await this.cityRepository.deleteCity(cityId);
                return true;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw 
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw 
        }
    }
    async getCity(cityId){
        try{
        const city=await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log('something wrong happend at service layer')
            throw 
        }
    }
}

module.exports=cityService;
export default class Weather{
    constructor(){
        this.key = '66c0dc3fde2d84fb992ef2a999ade326';
        this.city ='';
    }

    async getWeather(city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`);
        const data = await response.json();
        return data;
    }


}
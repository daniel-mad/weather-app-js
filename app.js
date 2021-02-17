import UI from './ui.js'
import Weather from './weather.js'

const weather = new Weather();
const ui = new UI();
ui.init()

const search = document.querySelector('#city-search');
const button = document.querySelector("[type='submit']");

button.addEventListener('click', async (e)=>{
    e.preventDefault();
    const city = search.value;
    search.value ='';
    const data = await weather.getWeather(city);
    console.log(data);
    if(data.cod !== 200){
        ui.alert();
        ui.removeAlert();
    }else{
        ui.render(data);
    }
    
})
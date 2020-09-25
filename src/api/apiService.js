import {API_KEY} from './constants';
export async function GetForecasts(city){
    try{
        let resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        return await resp.json();
    }catch(e){
        throw e;
    }
}
import React,{Component} from 'react';
import {getDate ,getTime} from '../../utils';
import {ImageUrls} from '../constants';

import './style.css';

class Forecast extends Component{

    renderImage=(type)=>{
        switch(type){
            case "overcast clouds":
                return ImageUrls['overcast'];
            case "light rain":
            case "moderate rain":
                return ImageUrls['rain'];
            case "clear sky":
                return ImageUrls['clear'];
            case "few clouds":
            case "scattered clouds":
            case "broken clouds":
                return ImageUrls['cloudy']
            default:
                return ImageUrls['default']
        }

    }



    renderCards = ()=>{
        const {data} = this.props;
        return data.map((item)=>{
            const image = this.renderImage(item.weather[0].description);
            item.dt_txt = item.dt_txt.replace(' ','T');
            const date = getDate(item.dt_txt);
            const time = getTime(item.dt_txt);
            return(
                <div className="card" style={{backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div className="heading">
                        <div>{date}</div>
                        <div>{time}</div>
                        <div>{item.main.temp}&#8451;</div>
                        <div>{item.weather[0].description}</div>
                    </div>
                    <div className="item">
                        <div>Max Temp</div>
                        <div>{item.main.temp_max}&#8451;</div>
                    </div>
                    <div className="item">
                        <div>Min Temp</div>
                        <div>{item.main.temp_min}&#8451;</div>
                    </div>
                    <div className="item">
                        <div>Humidity</div>
                        <div>{item.main.humidity} %</div>
                    </div>
                </div>
            )
        })
    }

    render(){

        return (
            <div className="forecastCards">
                {this.renderCards()}
            </div>
        )
    }
}


export default Forecast;
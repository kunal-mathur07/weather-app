import React, { Component } from 'react';
import TextBox from './components/CityContainer';

import Forecast from './components/Forecasts';
import {GetForecasts} from './api/apiService';
import './App.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state={
        city:'',
        weatherData:[],
        error:null
      }
  }
  handleChange = (e)=>{
    this.setState({
      city: e.target.value
    })
  }
  handleSubmit=async()=>{
      try{
        let data = await GetForecasts(this.state.city);
        this.setState({
          weatherData : [...data.list],
          error:null
        })
    }catch(e){
        this.setState({
           error: 'No results found for the city'
        })
    }

  }
  render(){
    const {weatherData,error, city} = this.state;
    return (
      <div className="App">
        <div className="cityForm">
          <TextBox onChange={this.handleChange} value={city} handleSubmit={this.handleSubmit}/>
          
          
        </div>
        {weatherData.length > 0 && !error &&  <Forecast data = {weatherData}/>}

          {error && <div className="error">{error}</div>}
      </div>
    );
  }
}

export default App;

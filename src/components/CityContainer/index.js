import React,{Component} from 'react';
import Button from '../Button';

import './style.css';

class TextBox extends Component{
  

    render(){
        return(
            <div className="flex">
                <input type="text" value={this.props.value} onChange={this.props.onChange} className="txtBox" placeholder="City name"/>
                <Button text="Get Forecast" onClick={this.props.handleSubmit}/>
                
            </div>
        )
    }
}


export default TextBox;
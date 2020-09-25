import React,{Component} from 'react';
import Button from '../Button';

import './style.css';

class TextBox extends Component{
  
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.handleSubmit();
        }
    }
    render(){
        return(
            <div className="flex">
                <input type="text" value={this.props.value} onChange={this.props.onChange} className="txtBox" placeholder="City name" onKeyPress={this.handleKeyDown}/>
                <Button text="Get Forecast" onClick={this.props.handleSubmit} />
                
            </div>
        )
    }
}


export default TextBox;
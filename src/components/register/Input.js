import React, {Component} from 'react';

class Input extends Component{
    render(){
        const {label, name, valid, value, onChange} = this.props;
        return (
            <div>
                <label>
                    {label}
                    <input type="text" 
                        id={name}
                        name={name} 
                        value={value}
                        onChange={onChange}/>
                        {valid ? "" : <span>Tidak Valid</span> }
                </label>
            </div>
        );
    }
}

export default Input;
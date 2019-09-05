import React from 'react';

class Button extends React.Component{
    render(){
        return (
            <>
                <input type="submit" 
                    value="Login" 
                    onClick={this.props.click}/>
            </>
        );
    }
}

export default Button;
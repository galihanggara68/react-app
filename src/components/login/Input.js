import React from 'react';

class Input extends React.Component{
    render(){
        return (
            <>
                <label for="username">Username : </label>
                <input type="text" 
                    id="username" 
                    value={this.props.username}
                    onChange={this.props.onChange}/>
                {this.props.usernameValid ? "" : <span>Data Tidak Valid</span>}
                <br/>
                <label for="password">Password : </label>
                <input type="password" 
                    id="password" 
                    value={this.props.password}
                    onChange={this.props.onChange}/>
                {this.props.passwordValid ? "" : <span>Data Tidak Valid</span>}
            </>
        );
    }
}

export default Input;
import React from 'react';
import Input from './Input';
import Button from './Button';

class FormLogin extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            usernameValid: true,
            passwordValid: true
        };
        this.inputChange = this.inputChange.bind(this);
        this.login = this.login.bind(this);
    }

    inputChange(e){
        let {id, value} = e.target;
        console.log(value);
        // this.setState(object, callback);
        this.setState({[id]: value}, 
            this.validate(id, value));
    }

    login(e){
        e.preventDefault();
        alert("Username : " + this.state.username 
            + "\nPassword : " + this.state.password);
    }
    // Username - max -> 12
    // Password - max -> 15
    // validate(){
    //     if(this.state.username.length > 12) return false;
    //     if(this.state.password.length > 15) return false;
    //     return true;
    // }

    validate(name, value){
        if(value.length > 12){
            // name = username
            this.setState({[name+"Valid"]: false});
            // this.setState({["usernameValid"]: false});
            // // this.setState({usernameValid: false}); 
        }else{
            this.setState({[name+"Valid"]: true});
        }

        switch(name){
            case "username":
                    // GALIH -> null
                    if(value.match(/([a-z])/g) != null){
                        this.setState({[name+"Valid"]: true});
                    }else{
                        this.setState({[name+"Valid"]: false});
                    }
                break;
            case "password":
                    if(value.length > 12){
                        this.setState({[name+"Valid"]: false});
                    }else{
                        this.setState({[name+"Valid"]: true});
                    }
                break;
        }

        // this.setState({[name+"Valid"]: (value.length > 12 ? false : true )});
    }

    render(){
        return (
            <>
                <Input username={this.state.username} 
                    password={this.state.password}
                    usernameValid={this.state.usernameValid}
                    passwordValid={this.state.passwordValid} 
                    onChange={this.inputChange}/>
                <Button title="Login" click={this.login}/>
            </>
        );
    }
}

export default FormLogin;
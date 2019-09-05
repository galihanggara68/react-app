import React, {Component} from 'react';
import Input from './Input';

class FormRegister extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            firstNameValid: true,
            lastName: "",
            lastNameValid: true,
            username: "",
            usernameValid: true,
            email: "",
            emailValid: true,
            password: "",
            passwordValid: true,
            confirmPassword: "",
            confirmPasswordValid: true
        };
        this.inputChange = this.inputChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }

    inputChange(e){
        const {id, value} = e.target;
        this.setState({[id]: value}, this.validate(id, value));
    }


    registerClick(e){
        e.preventDefault();
        alert("Register Success");
        alert(JSON.stringify(this.state, null, 2));
    }

    validate(stateName, value){
        switch(stateName){
            case "firstName":
                {
                    let valid = (value.match(/([a-zA-Z])/g) != null);
                    console.log(valid);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
            case "lastName":
                {
                    let valid = (value.match(/([a-zA-Z])/g) != null);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
            case "username":
                {
                    let valid = (value.match(/([a-z])/g) != null);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
            case "email":
                {
                    let valid = (value.match(/([a-z]*\@[a-z]*\.[a-z]*)/g) != null);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
            case "password":
                {
                    let valid = (value.match(/(\w*\d*)/g) != null);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
            case "confirmPassword":
                {
                    let valid = (value == this.state.password);
                    this.setState({[stateName+"Valid"]: valid});
                }
                break;
        }
    }

    render(){
        return (
            <>
                <h3>Form Registrasi</h3>
                <Input label="First Name : "
                    name="firstName"
                    value={this.state.firstName} 
                    valid={this.state.firstNameValid}
                    onChange={this.inputChange}/>
                <Input label="Last Name : "
                    name="lastName"
                    value={this.state.lastName} 
                    valid={this.state.lastNameValid}
                    onChange={this.inputChange}/>
                <Input label="Username : "
                    name="username"
                    value={this.state.username} 
                    valid={this.state.usernameValid}
                    onChange={this.inputChange}/>
                <Input label="Email : "
                    name="email"
                    value={this.state.email} 
                    valid={this.state.emailValid}
                    onChange={this.inputChange}/>
                <Input label="Password : "
                    name="password"
                    value={this.state.password} 
                    valid={this.state.passwordValid}
                    onChange={this.inputChange}/>
                <Input label="Password Confirmation : "
                    name="confirmPassword"
                    value={this.state.confirmPassword} 
                    valid={this.state.confirmPasswordValid}
                    onChange={this.inputChange}/>
                <input type="button" value="Register" onClick={this.registerClick} />
            </>
        );
    }
}

export default FormRegister;
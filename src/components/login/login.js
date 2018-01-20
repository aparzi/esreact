import React from "react"
import LoginService from "./loginService"
import CustomInput from "../../common/input/customInput";

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usename: '',
            password: '',
            showSuccess: false,
            showError: false,
            errorMessage: "",
            successMessage: ""
        };
        this.loginService = new LoginService();
    }

    changeText(field, event) {
        this.setState({[field]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault()
    }

    doLogin(event) {
        this.loginService.login(this.state.username, this.state.password, this.loginSuccess.bind(this), this.loginError.bind(this));

        console.log("username: " + this.state.username)
        console.log("password: " + this.state.password)
    }

    loginSuccess(dataResult) {
        this.setState({
            showSuccess: true,
            successMessage: 'Complimenti per il login, il tuo token è: ' + dataResult.token,
            showError: false,
            errorMessage: ''
        });
    }

    loginError(errorData) {
        this.setState({
            showSuccess: false,
            successMessage: '',
            showError: true,
            errorMessage: 'Errore durante il login: ' + errorData.error
        });
    }

    getSuccessMessage() {
        if (this.state.showSuccess)
            return <div style={{color: 'green'}}>{this.state.successMessage}</div>

        return <div></div>

    }

    getErrorMessage() {
        if (this.state.showError)
            return <div style={{color: 'red'}}>{this.state.errorMessage}</div>

        return <div></div>
    }

    render() {

        var successMessage = this.getSuccessMessage();
        var errorMessage = this.getErrorMessage();

        return (
            <div style={{marginTop: "100px", minHeight: "70vh"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mr-auto ml-auto">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div>
                                    <CustomInput
                                        value={this.state.username || ''}
                                        onChange={this.changeText.bind(this, 'username')}
                                        label="Username" />
                                </div>
                                <br />
                                <div>
                                    <CustomInput
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.changeText.bind(this, 'password')}
                                        style={{width: '97px'}}
                                        label="Password"/>
                                </div>
                                <br />
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    onClick={this.doLogin.bind(this)}>
                                    Entra
                                </button>
                                {successMessage}
                                {errorMessage}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
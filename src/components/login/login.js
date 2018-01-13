import React from "react"

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    changeText(field, event) {
        this.setState({[field]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault()
    }

    doLogin() {
       console.log("username: " + this.state.username)
        console.log("password: " + this.state.password)
    }

    render() {
        return (
            <div style={{marginTop: "100px", minHeight: "70vh"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mr-auto ml-auto">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className = "form-control"
                                        placeholder="username"
                                        value= {this.state.username || ''}
                                        onChange={this.changeText.bind(this, "username")}/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className = "form-control"
                                        placeholder="password"
                                        value= {this.state.password || ''}
                                        onChange={this.changeText.bind(this, "password")}/>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    onClick={this.doLogin.bind(this)}
                                >Entra
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
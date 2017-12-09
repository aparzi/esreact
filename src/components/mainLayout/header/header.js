import React from "react"
import headerCss from "../../../css/mainLayout/header/header.css"
import Logo from "../../../images/notebook.png"

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} className = "logo-image"/>
                        <span>&nbsp;EsReact</span>
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" href="#">
                                Home
                            </a>
                            <a className="nav-item nav-link" href="#">What</a>
                            <a className="nav-item nav-link" href="#">Who</a>
                        </div>
                        <div className = "navbar-nav">
                            <a className="nav-item nav-link" href="">Login</a>
                            <a className="nav-item nav-link" href="">Registrazione</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
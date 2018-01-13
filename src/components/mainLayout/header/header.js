import React from "react"
import headerCss from "../../../css/mainLayout/header/header.css"
import Logo from "../../../images/notebook.png"

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-success">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        <img src={Logo} className="logo-image"/>
                        <span>&nbsp;EsReact</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" href="#home-top">
                                Home
                            </a>
                            <a className="nav-item nav-link" href="#what">Cosa facciamo</a>
                            <a className="nav-item nav-link" href="#who">Chia siamo</a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/login">Login</a>
                            <a className="nav-item nav-link" href="">Registrazione</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
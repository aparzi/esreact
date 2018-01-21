import React from "react"
import "../../../css/mainLayout/footer/footer.css"

export default class Footer extends React.Component {

    render() {
        return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col mr-auto">
                        <p>Book Seller Company</p>
                        <p>Via Alessandria, 4</p>
                        <p>Toro, Campobasso, Italia</p>
                        <p>AParzi@gmail.com</p>
                    </div>
                    <div className="col">
                        <div className="pull-right">
                            <a href="https://www.facebook.com/paolodellaguzzocom/" target="_blank">
                                <i className="fa fa-facebook-official fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/PaoloDellaguzzo" target="_blank">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/paolodellaguzzo/" target="_blank">
                                <i className="fa fa-linkedin-square fa-2x"></i>
                            </a>
                            <a href="https://plus.google.com/u/0/+paolodellaguzzo" target="_blank">
                                <i className="fa fa-google-plus-official fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
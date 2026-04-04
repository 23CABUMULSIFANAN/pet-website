import "./Form.css"

export default function Form(){
    return(
        <div className="bg-3">

            <div className="container">
                <div className="row justify-content-end">

                    <div className="col-12 col-lg-6">

                        <div className="form-card">

                            <div className="row">
                                <div className="col-12">
                                    <h1 className="form-h1">Free Consultation</h1>

                           
                                </div>
                                <div className="col-12">
                                     <div className="dropdown">

                                <button
                                    className="btn dropdown-toggle drop"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Select Services
                                </button>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Select Services</a></li>
                                    <li><a className="dropdown-item" href="#">Cat sitting</a></li>
                                    <li><a className="dropdown-item" href="#">Dog walking</a></li>
                                    <li><a className="dropdown-item" href="#">Pet care</a></li>
                                </ul>

                            </div>
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder="Your name" className="inp"></input>
                                    <input type="text" placeholder="Phone Number" className="inp"></input>
                                    <input type="date"  className="inp"></input>
                                    <input type="time"  className="inp"></input>
                                    <textarea className="inp" placeholder="Message"> </textarea>
                                    <button className="inp-BTN">SEND MESSAGE</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
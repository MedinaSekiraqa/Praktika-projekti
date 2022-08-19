import { Signup } from "./Signup";
import contactImg from '../../assets/contact.jpg';

import './Login.scss'


function Sign(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Signup/>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-1" src={contactImg} alt=""/>
                </div>

            </div>
        </div>
    )
}
export default Sign;
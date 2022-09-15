import * as React from "react";
import {ContactForm} from './ContactForm';
import { Container } from "react-bootstrap";
import contactImg1 from '../../assets/contactus.jpg';

export default function Contact(){
    return(
        <Container>
             <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <ContactForm/>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-1" src={contactImg1} alt=""/>
                </div>

            </div>
        </div>
        </Container>
       
       
    );
}



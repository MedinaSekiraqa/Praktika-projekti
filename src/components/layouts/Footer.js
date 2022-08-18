import React from 'react' 
import styled from 'styled-components'


 function Footer(){
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/*Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                            <li>ubt-uni.net</li>
                            <li>100-999-999</li>
                            

                        </ul>

                    </div>
                    {/*Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>About us</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Join Now</a></li>
                            <li><a href="/">The Team</a></li>
                            <li><a href="/">Home Page</a></li>

                        </ul>

                    </div>
                    {/*Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Useful Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Your Account</a></li>
                            <li><a href="/">Help</a></li>
                            

                        </ul>

                    </div>
                    {/*Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Service</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Our History</a></li>
                            <li><a href="/">Financial Services</a></li>
                            <li><a href="/">Employes Liability</a></li>
                          

                        </ul>

                    </div>
                </div>
                {/*Foooter Bootom */}
                <div className="footer-bootom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App-All Rights
                        Reserved
                    </p>

                </div>
            </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background:var(--mainDark);
        padding-top: 3rem;
        color:var(--mainWhite);
    }

    .footer-bootom{
        padding-top:3rem;
        padding-bottom:2rem;
    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover{
        color:var(--mainLightgrey);
    }

`;
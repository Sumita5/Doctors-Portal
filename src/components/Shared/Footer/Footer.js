import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import noNamedCol from '../../fakeData/footerCol1Data';
import services from '../../fakeData/footerServices';
import oralHealth from '../../fakeData/footerOralHealth';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamedCol}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <div className="col-md-3">
                    <h5 className="text-brand font-weight-bolder mb-3">Our Address</h5>
                        <Link to="//google.com/map"><p className="text-secondary">New York - 101010 Hudson Yards</p></Link>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-solid">Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </div>
                </div>
                <div className="copyRight text-center text-solid">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved@Sumita</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
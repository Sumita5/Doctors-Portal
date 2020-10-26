import React from 'react';
import { Link } from 'react-router-dom';
import headerPic from '../../../images/headerPic.png';

const HeaderMain = () => {
    return (
        // <div className="container-fluid">
            // <div className="container">
                <div style={{height:'600px'}} className="row d-flex align-items-center">
                    <div className="col-md-4 offset-md-1">
                        <h1 className='font-weight-bolder text-solid'>Your New Smile <br/> Starts Here</h1>
                        <p className='lead text-secondary'>Vero officia atque ipsa, quo et architecto omnis veniam quos magnam id! Lorem ipsum dolor sit amet.</p>
                        <Link to='/appointment'><button className='btn btn-brand'>GET APPOINMENT</button></Link>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={headerPic} alt=""/>
                    </div>
                </div>
            // </div>
        // </div>
    );
};

export default HeaderMain;
import React from 'react';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section style={{height:'450px'}} className="make-appointment">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white  py-5">
                        <h5 className="text-brand text-uppercase ">Appointment</h5>
                        <h1 className="display-4 my-4">Make an Appointment <br/> Today</h1>
                        <p className="lead my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-brand mt-6">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
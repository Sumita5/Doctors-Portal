import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorsData from '../../fakeData/doctorsData';
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container text-center">
                <h4 className=" text-brand font-weight-bolder mb-5">Our Doctors</h4>
                <div className="row">
                    {
                        doctorsData.map(doctor =>
                            <div key={doctor.name} className="col-md-4">
                                <img className="img-fluid mb-3" src={doctor.image} alt="" />
                                <h4 className="font-weight-bold">{doctor.name}</h4>
                                <p className='text-secondary'><FontAwesomeIcon className="text-brand" icon={faPhoneAlt} />{doctor.cell}</p>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Doctors;
import React from 'react'
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const Services = () => {
    const serviceInfo = [
        {
            logo:fluoride,
            title:'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        },
        {
            logo:cavity,
            title:'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        },
        {
            logo:whitening,
            title:'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        }
    ]
    return (
        <div className="container text-center mt-5">
        <h5 className='text-brand font-weight-bolder'>OUR SERVICES</h5>
        <h1 className='text-solid font-weight-bolder'>Services We Provide</h1>
            <div className="row">
                {serviceInfo.map(data=>
                        <div key={data.title} className="col-md-4">
                            <div className="card border-0 mt-3">
                                <div className="card-body">
                                    <img height='60' src={data.logo} alt=""/>
                                    <h4 className='text-solid font-weight-bold my-4'>{data.title}</h4>
                                    <p className='text-secondary'>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Services;
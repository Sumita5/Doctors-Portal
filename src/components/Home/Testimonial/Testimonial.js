import React from 'react';
import wilson from '../../../images/Wilson.png';
import ema from '../../../images/Ema.png';
import aliza from '../../../images/Aliza.png';
import quote from '../../../images/quote.png';

const testimonialData = [
    {
        name: 'Winson Herry',
        city: 'California',
        image: wilson
    },
    {
        name: 'Ema Gomez',
        city: 'New York',
        image: ema
    },
    {
        name: 'Aliza Farari',
        city: 'Alabama',
        image: aliza
    }
];

const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5 align-self-center">
                        <h5 className='text-brand font-weight-bold'>TESTIMONIAL</h5>
                        <h1 className='text-solid font-weight-bolder'>What Our Patients <br /> Say</h1>
                    </div>
                    <div className="col-md-4 mb-4">
                        <img className='d-block ml-auto' height='200' src={quote} alt="" />
                    </div>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(data =>
                            <div key={data.name} className="card border-0 shadow px-2">
                                <div className="card-body">
                                    <p className="card-text text-secondary text-justify mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!</p>
                                </div>
                                <div className="card-footer p-0 border-0 bg-white mt-5 mb-4 d-flex  ">
                                    <img className="mx-3" src={data.image} alt="" height='60' />
                                    <div className="align-self-center">
                                        <h6 className="text-brand font-weight-bold m-0">{data.name}</h6>
                                        <p className="text-secondary font-weight-light m-0">{data.city}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
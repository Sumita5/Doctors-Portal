import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="pb-0 pb-md-4 my-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <img height='450' width='400' className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <h1 className='text-solid mb-4'>Exceptional Dental<br/> Care, on your Term</h1>
                        <p className="text-secondary text-justify my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-brand mt-3">Learn More</button>
                    </div>
                </div>
            </div>
         </section>
    );
};

export default FeaturedService;
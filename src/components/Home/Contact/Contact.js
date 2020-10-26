import React from 'react';

const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-brand font-weight-bold">CONTACT US</h5>
                    <h1>Always connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group  mb-5">
                           <input style={{height:'60px'}} type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group  mb-5">
                           <input style={{height:'60px'}} type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group  mb-5">
                           <textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;
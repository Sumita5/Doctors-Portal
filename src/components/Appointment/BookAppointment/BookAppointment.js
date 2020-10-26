import React, { useState } from 'react';
import bookingData from '../../fakeData/bookingData';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]
const BookAppointment = ({ date }) => {
    // const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking =>
                        <div key={booking.id} className="col-md-4 mb-5">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-brand">{booking.subject}</h5>
                                    <h6>{booking.visitingHour}</h6>
                                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                                    <button onClick={openModal} className="btn btn-brand">BOOK APPOINMENT</button>
                                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default BookAppointment;

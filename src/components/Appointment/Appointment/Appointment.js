import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import Footer from '../../Shared/Footer/Footer';
const Appointment = () => {
    document.title='APPOINMENT / Doctors-Portal'
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div className="container">
            <Navbar/>
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default Appointment;
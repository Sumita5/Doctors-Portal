import React from 'react';
import Calendar from 'react-calendar';
import headerPic from '../../../images/headerPic.png';

const AppointmentHeader = ({handleDateChange}) => {
    // const [value, onChange] = useState(new Date());
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
            </div>
            <div className="col-md-6">
                <img src={headerPic} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;
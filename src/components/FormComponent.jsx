import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function FormComponent(props) {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container fluid>
            <div>
                <form>
                    <div>
                        <button type='button' onClick={() => console.log('clicked button')}>One way</button>
                        <button type='button'>Return</button>
                    </div>
                    <div>
                        <label htmlFor="location">
                            Location
                            <input type="text" name='location'/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="destination">
                            Destination
                            <input type="text" name='destination'/>
                        </label>
                    </div>
                    <div>
                        Pickup date & time
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={10}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                    <div>
                        <button type='button'>Get Quote</button>
                    </div>
                </form>
                <img src="https://booktaxi.co.il/wp-content/uploads/2017/05/car-big-2.png" alt="car"/>
            </div>
        </Container>
    );
}

export default FormComponent;
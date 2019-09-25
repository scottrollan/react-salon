import React from 'react';
import styles from './AppointmentsBar.module.css';



const AppointmentButton = props => {

    return(
        <footer>
            <a 
                className={styles.bar} 
                href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
                id="footer"
                >make an appointment
            </a>
        </footer>        
    )
}

export default AppointmentButton;
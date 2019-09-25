import React from 'react';
import styles from './NavBar.module.css';

const NavBar = props => {

    const clickBtn = (event) => {
        const page = event;
        document.getElementById('home').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('color').classList.add('hide');
        document.getElementById(page).classList.remove('hide');
    };
    return (
        <div className={styles.navbar}>
            <span onClick={() => clickBtn('home')} className={styles.brand} >Barry Rollan Studio</span>
            <p 
                onClick={() => clickBtn('home')}
                >Home
            </p>
            <p 
                onClick={() => clickBtn('services')}
                >Services
            </p>
            <p 
                onClick={() => clickBtn('color')}
                >O&amp;M Cor Color
            </p>
        </div>
    )

};

export default NavBar;
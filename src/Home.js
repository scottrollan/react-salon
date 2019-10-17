import React from 'react';
import Sola from './photos/sola.png';
import Map from './components/Map';
import OmBanner from './photos/omBanner.jpg';
import NeumaBanner from './photos/neumaBanner.png';
import Blog from './components/Blog';
import Neuma from './photos/neumaLogo.png';

const Home = props => {

    const textStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word',
        fontSize: 'calc(22px + .5vw)'
    }
    const omStyle = {
        margin: '35px 0',
        color: '#593e00',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: '800',
        fontSize: '28px',
        textAlign: 'center'
    }

    return(
        <div 
          className="page"  
          id="home">
            <p style={omStyle}><b>O&amp;M AMMONIA, RESORCINOL AND PPD-FREE COLOR</b></p>
            <img src={OmBanner} alt='' className='home-child' style={{ width: '100%' }} />
            <div className="col-md-12 center-block home-child" style={{ backgroundImage: 'linear-gradient(90deg, #343a40, #7c7c7c, #343a40)', padding: '12px', width: '100%' }}>
                <p style={{ fontSize: '28px', color: '#ffffff' }}>Barry is now working at the Dunwoody location of</p>
                <img src={Sola} alt='' style={{ maxWidth: '86vw', minWidth: '30vw' }}/>
            </div>
            <p className='home-child' style={{ fontSize: 'calc(24px + .8vw)' }}>4505 Ashford Dunwoody Rd 30346</p>
            <Map />
            <img src={Neuma} alt='' className='home-child' style={{ maxWidth: '80%', display: 'block', margin: '15px auto' }} />
            <img src={NeumaBanner} alt='' className='home-child' style={{ width: '100%' }} />
            <Blog textStyle={textStyle}/>

        </div>
    )
};

export default Home;
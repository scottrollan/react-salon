import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Logo from './photos/o&mLogo.png';
import Myth1 from './photos/Myths-1.jpg';
import Myth2 from './photos/Myths-2.jpg';
import Myth3 from './photos/Myths-3.jpg';
import Myth4 from './photos/Myths-4.jpg';
import Myth5 from './photos/Myths-5.jpg';
import TextLink from './components/TextLink';
import EmailLink from './components/EmailLink';
import AppointmentButton from './components/AppointmentButton';


const Color = props => {
    return(
        <div 
          className="page hide"  
          id="color">
        
            <Jumbotron id="jHeader" style={{margin: 0 }}>
                <div className="container">        
                    <p className="text-center myth" style={{ fontSize: '3vw', fontWeight: '800' }}>Mythbusting non-toxic color with O&amp;M Cor</p>
                </div>
            </Jumbotron>
            
            <Carousel>
                <Carousel.Item>
                    <img src={Myth1} className="d-block w-100" alt="" style={{margin: 0, zIndex: '1' }}/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Myth2} className="d-block w-100" alt=""style={{margin: 0, zIndex: '1' }} />
                </Carousel.Item>
                <Carousel.Item>
                <img src={Myth3} className="d-block w-100" alt="" style={{margin: 0, zIndex: '1' }}/>
                </Carousel.Item>       
                <Carousel.Item>
                    <img src={Myth4} className="d-block w-100" alt="" style={{margin: 0, zIndex: '1' }}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Myth5} className="d-block w-100" alt="" style={{margin: 0, zIndex: '1' }}/>
                </Carousel.Item>
            </Carousel>


            <Jumbotron id="originalMineral" style={{ background: 'transparent', padding: '12px', width: '100vw', margin: '0' }}>
                <div className="container">
                    <img src={Logo} alt=""/>
                    <p className="lead">Healthy hair begins when it’s free from stress. Reduce the chemical overload. We challenge the artificial norms of professional haircare with formulations that are both effective and gentle. Removing harsh chemicals wherever possible while including natural extracts and active minerals that deliver real benefits.</p>
                </div>
            </Jumbotron>
            <TextLink />
            <EmailLink />
            <AppointmentButton />
        </div>
    )
};
export default Color;
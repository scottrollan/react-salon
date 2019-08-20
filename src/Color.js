import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Blog from './components/Blog';
import Logo from './photos/o&mLogo.png';
import Myth1 from './photos/Myths-1.jpg';
import Myth2 from './photos/Myths-2.jpg';
import Myth3 from './photos/Myths-3.jpg';
import Myth4 from './photos/Myths-4.jpg';
import Myth5 from './photos/Myths-5.jpg';


const Color = props => {
    
    const textStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word',
        marginLeft: '30%',
    }

    return(
        <div 
          className="page hide"  
          id="color">
            <Jumbotron style={{margin: '2vh 0', borderRadius: "3vw 3vw 3vw 3vw" }}>
                <div className="container">
                    <img src={Logo} alt="" className="omLogo"/>
                    <p className="lead">Healthy hair begins when it’s free from stress. Reduce the chemical overload. We challenge the artificial norms of professional haircare with formulations that are both effective and gentle. Removing harsh chemicals wherever possible while including natural extracts and active minerals that deliver real benefits.</p>
                </div>
            </Jumbotron>
        
            <Jumbotron id="jHeader" style={{margin: 0, borderRadius: "3vw 3vw 0 0" }}>
                <div className="container">        
                    <p className="text-center" style={{ fontSize: '3vw', fontWeight: '800' }}>Mythbusting non-toxic color with O&amp;M Cor</p>
                </div>
            </Jumbotron>


            <Carousel style={{marginBottom: '2vh', borderRadius: "0 0 3vw 3vw", zIndex: '999 !important' }}>
                <Carousel.Item>
                    <img src={Myth1} className="d-block w-100" alt="" style={{margin: 0, zIndex: '999', borderRadius: "0 0 3vw 3vw" }}/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Myth2} className="d-block w-100" alt=""style={{margin: 0, zIndex: '999', borderRadius: "0 0 3vw 3vw" }} />
                </Carousel.Item>
                <Carousel.Item>
                <img src={Myth3} className="d-block w-100" alt="" style={{margin: 0, zIndex: '999', borderRadius: "0 0 3vw 3vw" }}/>
                </Carousel.Item>       
                <Carousel.Item>
                    <img src={Myth4} className="d-block w-100" alt="" style={{margin: 0, zIndex: '999', borderRadius: "0 0 3vw 3vw" }}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Myth5} className="d-block w-100" alt="" style={{margin: 0, zIndex: '999', borderRadius: "0 0 3vw 3vw" }}/>
                </Carousel.Item>
            </Carousel>
            <Blog textStyle={textStyle}/>
        </div>
    )
};
export default Color;
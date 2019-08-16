import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Blog = props => {
    const [ expandState, setExpandState ] = useState({
        expanded: false,
    });

    const expandMe = () => {
        setExpandState({ expanded: true, })
    };

    const collapseMe = () => {
        setExpandState({ expanded: false })
    };
    return(
        <Jumbotron style={{margin: 0, borderRadius: "3vw 3vw 3vw 3vw" }}>
        <h1 class="fromBarry" style={{ maxWidth: '30%', float: 'left' }}>From Barry</h1>
        <div>
            <p class="lead" style={props.textStyle}>I am pleased to see that more people are educating themselves on toxicity and are seeking out alternatives to traditional home and personal care products. There is no real oversight governing to what ingredients the manufacturers of these products are allowed to expose their consumers, so we consumers just have to figure it out ourselves.</p>
            <div>
                {   expandState.expanded
                    ? null
                    : <Button 
                        class="btn btn-primary" 
                        id="seeMore"
                        onClick={expandMe}
                    >read more...
                    </Button>
                }                        
            </div>
        </div>
        <div>                        
            { expandState.expanded 
                ? 
                <div>
                <p class='lead' style={props.textStyle}>Most companies are aware of this growing population of more saavy consumers looking for safer products. They have different marketing strategies to capitalize on it. Unfortunately, a huge majority of these companies concentrate on simply <em>marketing</em> to these consumers with <a href="https://www.merriam-webster.com/dictionary/greenwashing" target="blank">greenwashing</a> campaigns. In doing research, you'll realize it is not difficult to find bloggers that will dismiss the efforts of brands that truly are less toxic than others, lumping them in with the many that purely greenwash their products--another distinction that is left up to the customer to make.</p>
                <p class='lead' style={props.textStyle}>To me, that distinction is made when a brand is able to remove every ingredient that is <em>known</em> to be harmful whenever there is a viable, less- or non-toxic substitute. </p>
                <p class='lead' style={props.textStyle}>Through years of research and hands-on experience, I believe O&amp;M Cor Color to be the best product line available to meet that distinction. </p>
                <p class='lead' style={props.textStyle}>With current technology, the truth is that to <em>reliably and predictably</em> alter the pigmentation of hair, a chemical process must take place. That, of course, doesn't mean that we shouldn't care which chemicals are used, but it does mean chemicals must be present.</p>
                <p class='lead' style={props.textStyle}>O&amp;M's color is not chemical-free. But O&amp;M color is a high-quality, reliable color that is without the most heinous of the ingredients that most other color lines will leave in, even as they lead their customers to believe they are "natural". And, yes, that includes the ones you get at your over-priced, natural grocer or that brand that offers you pure plant and flower essences in recycled glass (cue the greenwashing). </p>
                <p class='lead' style={props.textStyle}>With all that said, my commitment to my clients, and to myself, is that I will attempt to know about, and use, the least-toxic, professional color line available that performs effectively and predictably.  Right now, I believe O&amp;M Cor Color to be that line. </p>
                <p class='lead' style={props.textStyle} id="signature"><em>- Barry</em></p>
                <button 
                    class="btn btn-primary reveal" 
                    id="seeLess"
                    onClick={collapseMe}
                >read less...</button>                
                </div>
                : null
            }
        
        </div>            
        </Jumbotron>
    )
}

export default Blog;
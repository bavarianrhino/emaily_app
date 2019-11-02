import React from "react";
import coverPicture from '../media/imgs/email_survey_teal.png'

const Landing = () => {
    return (
        <div className='container valign-wrapper"'>
            <div className='row valign-wrapper"'>
                <div className="col s12 m6" style={{ textAlign: 'center', borderRadius: '10px'}}>
                    <img src={coverPicture} alt={coverPicture} className="responsive-img z-depth-5" style={{ textAlign: 'center', borderRadius: '10px', marginTop: '40px', maxWidth: '70%'}} />
                </div>
                <div className="col s12 m6" style={{ textAlign: 'center', borderRadius: '10px'}}>
                    <div style={{ margin: '10em 0 25px 0' }}>
                        <p style={{ fontSize: '1.8em' }}>A simple survey service that allows you to get meaningful feedback from customers.</p>
                    </div>
                    <div style={{ margin: '25px 0 0 0' }}>
                        <button className="btn-large waves-effect waves-light teal" style={{ borderRadius: '10px', marginTop: '5px'}}>Try It</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
import React from 'react';
// import './offices.css';

function offices(props) {
    return (
        <div className="offices">
        <div className="whole">
            
            
                    {props.x.map(el=> (el.type=== 'ofchd'? <div className= "ofchd">
                
                        <h2>{el.title}</h2>
                        <p>{el.desc}</p>
                
                    </div>: ''))}

                    <div className="ofcgd">


                        {props.x.map(el=> (el.type=== 'ofccd'? <div className= "ofccd">
                
                            <a href="#" className="slide">
                                <figure className="office-image"><img scr={el.src} srcset={el.srcset}/></figure>
                                <div className="office-desc">
                                    <h2 className="office-name">{el.title}</h2>
                                    <button className="office-button">See openings</button>
                                </div>
                            </a>
                
                        </div>: ''))}


                    </div>
            
            </div>
        </div>
    )
}


export default offices;
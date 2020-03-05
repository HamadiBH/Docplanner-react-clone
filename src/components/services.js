import React from 'react';
// import './services.css';

function services(props) {
    return (
        <div className="servicesgrid">
            
            <div>
                {props.x.map(el=> (el.type=== 'mn'? 
                <div className="mn">
                    <p className="target">{el.target}</p>
                    <h2 className="serv-desc">{el.desc}</h2>
                    <div className="serv">    
                        <div className="location">
                            <select id="location-list">

                                {el.loc.map(el => <option>{el.option}</option>)}
                            </select>
                        </div>
                        <figure className="services-fig">
                            <img src={el.link}/>
                        </figure>
                    </div>
                </div>
                : ''))}
            </div>
            
            <div>
                {props.x.map(el=> (el.type=== 'nomn'? 
                <div className="nomn">
                    <p className="target">{el.target}</p>
                    <h2 className="serv-desc">{el.desc}</h2>
                    <div className="serv">
                        <figure className="services-fig">
                            <img src={el.link}/>
                        </figure>
                    </div>
                </div>
                : ''))}
            </div>
            
            
        </div>
    )
}


export default services;

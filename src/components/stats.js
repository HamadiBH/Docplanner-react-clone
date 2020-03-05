import React from 'react';
// import './stats.css';

function stats(props) {
    return (
        <div className="stats">
            
            <div className="grid">

                <div className="pres">
                    {props.x.map(el=> (el.type=== 'pres'? <div class="headline">
                        <h2>{el.hd}</h2>
					    <p>{el.desc}</p>   
                        <div>
                            <img class="blogo" src="https://www.docplanner.com/img/logo.png"/>
                        </div>
                    </div>: ''))}
                </div>
                <div className="square">
                    <div className="stats-column1">
                        
                        {props.x.map(el=> (el.type=== 'card1'? <div class="stats-item">
							
                                <img src={el.src} srcSet={el.scrset}/>
							    <h3>{el.hd}</h3>
							    <p>{el.desc}</p>
                        
                        </div>: ''))}



                    </div>
                    <div className="stats-column2">
                        
                        {props.x.map(el=> (el.type=== 'card2'? <div class="stats-item">
							
                                <img src={el.src} srcSet={el.srcset}/>
							    <h3>{el.hd}</h3>
							    <p>{el.desc}</p>
                        
                        </div>: null))}



                    </div>
                </div>



            </div>
            
            
            
        </div>
    )
}


export default stats;
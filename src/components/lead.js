import React from 'react';
// import './lead.css';

function lead(props) {
    return (
        <div className="whlead">
            <img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png"></img>
            
                {props.x.map(el=> (el.type=== 'hd'? <h2 className="leadhead">{el.contenent}</h2>: ''))}
            
                <div className="leadgrid">
                {props.x.map(el=> (el.type=== 'para'? <p className="leadp">{el.contenent}</p>: ''))}
                </div>
            
        </div>
    )
}


export default lead;

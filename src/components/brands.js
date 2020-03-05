import React from 'react';
// import './brands.css';

function brands(props) {
    return (
        <div className="brands">
            
            
                {props.x.map(el=> (el.type=== 'text'? <h2 className="brandshd">{el.contenent}</h2>: ''))}
            
                <div className="brands-logos">
                {props.x.map(el=> (el.type=== 'icon'? <a href="#">{el.svgprop.map(el => <svg src={el.src} width={el.width} height={el.height} viewbox={el.vb}><path d={el.path}></path></svg>)}</a>: ''))}
                </div>
            
        </div>
    )
}


export default brands;
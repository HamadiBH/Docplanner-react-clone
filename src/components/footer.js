import React from 'react';


function footer(props) {
    return (
        <div className="footer">
            
            
            <p> We are leaders in 10 countries: {props.x.map((el,i)=>i===props.x.length-1?<str><str> and </str><a href="#">{el}</a></str>:<str><a href="#">{el}</a><str>, </str></str> )}</p>
            <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
            <p>www.docplanner.com © 2020</p>
        </div>
    )
}


export default footer;
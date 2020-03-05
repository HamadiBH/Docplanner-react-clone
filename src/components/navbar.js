import React ,{Fragment} from 'react';
// import './navbar.css';


 function Navbar(props) {
    return (
        <div className='brbg'>
            <div className='bar'>
                <div>
                    <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
                </div>
                <div>
                    <ul className='list'>
                        {props.x.map(el=>
                        <Fragment>
                            <li className='title'>{el.title}
             
                            {!el.drop ? null :
                            (
                                <ul className='drop-list'>
                                    {el.drop.map(el => <li>{el.title}</li>)}
                                </ul>
                            )
                             } 
             
                            </li>
                        </Fragment>
                            )}
            
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
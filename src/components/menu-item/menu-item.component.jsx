import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './menu-item.style.scss';

const  MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <Link className={`${size} menu-item`} to={`${match.url}${linkUrl}`}>
        
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}>

            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
             
    </Link>
   
);

export default withRouter(MenuItem);

// 
// <div  className={`${size} menu-item` onClick={() => history.push(`${match.url}${linkUrl}`)} } > </div>
import React from 'react';
import errorPage from './../../images/pagenotfound.jpg'
const PageNotFound = () => {
    return (
        <div>
            <img src={errorPage} alt="error page" style={{width:"100%", height:'100vh'}}/>
        </div>
    );
};

export default PageNotFound;
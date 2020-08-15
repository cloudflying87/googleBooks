import React from 'react';

function Alert (props){
    return(
        <div role="alert" className={`alert alert-success`} 
            style={{width: "65%", margin: "0 auto", marginTop: 18,...props.style }}
            >
            {props.children}
        </div>  
    )
}

export default Alert
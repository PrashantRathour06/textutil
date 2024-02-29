import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
         const lower = word.tolowercase();
         return lower.charat(0).toUpperCase()+lower.slice(1);
    }
    return (
        props.alert && <div className= "alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
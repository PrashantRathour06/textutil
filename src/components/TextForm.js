import React, { useState } from 'react'

export default function (props) {
    const handleUpclick = () => {
        // console.log("Uppercaseclicked");
        setText(text.toUpperCase());
        props.showAlert("text converted in uppercase", "Success");
    }
    const handleloclick = () => {
        // console.log("Uppercaseclicked");
        setText(text.toLowerCase());
        props.showAlert("text converted in lowercase", "Success");
    }



    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upper case</button>
                <button className="btn btn-secondary" onClick={handleloclick}>Convert to lower case</button>
            </div>
            <div className="container">
                <h2>your text summary</h2>
                <p>{text.split(" ").length} , {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes to words read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}


import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase" , "success");
    }
    const handleLowClick = () => {
        console.log("Upercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase" , "success");
    }

    const handleOnClick = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Value Here");
    return (
        <>
        <div>
            <h1 className={`container my-4 text-${props.mode === 'light'?'dark':'light'}`}>{props.title}</h1>
            <div className="form-group mb-3">
                {/* <label htmlFor="myBox">Exa</label> */}
                <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'}`} style={{backgroundColor:props.mode === 'dark'?'grey':'light'}} value={text} onChange={handleOnClick} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
        </div>
        <div className="container my-4">
            <h3 className={`text-${props.mode === 'light'?'dark':'light'}`} >Your Text Summary</h3>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`} >{text.split(" ").length} words and {text.length} characters</p>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`} >You took {0.008 * text.split(" ").length} minutes to read</p>
            <h5 className={`text-${props.mode === 'light'?'dark':'light'}`} >Preview</h5>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`} >{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

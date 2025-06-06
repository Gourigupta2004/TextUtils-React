import React, { useRef, useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase(); //Converting the text to uppercase
        setText(newText); //Setting the new text to the state variable
        props.showAlert("Converted to Uppercase", "success"); //Showing the alert
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase(); //Converting the text to lowercase
        setText(newText); //Setting the new text to the state variable
        props.showAlert("Converted to Lowercase", "success"); //Showing the alert
    }

    const clearText = () => {
        console.log("Clear Text was clicked " + text);
        let newText = ""; //Converting the text to lowercase
        setText(newText); //Setting the new text to the state variable
        props.showAlert("Text Cleared", "success"); //Showing the alert
    }

    const generateSlug = () => {
        console.log("Generate Slug was clicked " + text);
        let newText = text.trim().toLowerCase().replaceAll(" ", "-");
        setText(newText); //Setting the new text to the state variable
        // This will convert the text to lowercase and replace spaces with hyphens
        props.showAlert("Slug Generated", "success"); //Showing the alert

    }

    const handleCopy = () => {
        console.log("You copied the text " + text);
        textArearef.current.select(); //This will select the text in the textarea
        navigator.clipboard.writeText(text); //This will copy the text to the clipboard
        setTimeout(() => {  
            document.getSelection().removeAllRanges();
        }, 200);

        props.showAlert("Text Copied", "success"); //Showing the alert
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //This will split the text by spaces
        setText(newText.join(" ")); //This will join the text with a single space
        props.showAlert("Extra Spaces Removed", "success"); //Showing the alert
    }

    const convertToPara = () => {
        let newText = text.replaceAll('\n', ' '); 
        setText(newText); 
        props.showAlert("Converted Into Paragraph", "success"); 
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value); //Setting the value typed by the user in the textarea
    }

    // State is a variable that can change over time
    const [text, setText] = useState('Enter text here');
    const textArearef = useRef(null); // This is used to access the textarea element directly

    // To change the text 
    //text = "new text"; // This will not change the state
    // setText("new text"); // This will change the state

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea ref={textArearef} className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#302f2d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>

                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={handleUpClick}>Convert To Uppercase</button>
                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={handleLoClick}>Convert To LowerCase</button>
                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={clearText}>Clear Text</button>
                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={generateSlug}>Generate Slug</button>
                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                <button className={`btn btn-${props.theme || 'primary'} mx-2 mb-2`} disabled={text.length===0} onClick={convertToPara}>Convert Into Paragraph</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                {/* .filter((element) => {
                    return element.length!== 0} ---> can be used here also) */}
                <p>{text.trim() === "" ? "0" : text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
                <p>{text.trim() === "" ? "0" : 0.008 * text.trim().split(/\s+/).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.trim().length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
} 

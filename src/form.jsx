
import React, { useState } from 'react';
export default function Form() {
  const [text, setText] = useState('Enter Text here');
  const [alert, setAlert] = useState('Converted Sucessfully');
  const onpress =() => {
     let dfg= text.toUpperCase()
    setText(dfg)
    setAlert("Text Converted to Upper Case Sucessfully !!")

    setAsd({display : "block",transition : "all 2s ease-in-out"})
    setTimeout(()=>{setAsd({display : "none",transition : "all 2s ease-in-out"});},5000);
  }
  const onpresslc =() => {
     let dfg= text.toLowerCase()
    setText(dfg)
    setAlert("Text Converted to Lower Case Sucessfully !!")

    setAsd({display : "block",transition : "all 2s ease-in-out"})
    setTimeout(()=>{setAsd({display : "none",transition : "all 2s ease-in-out"});},5000);
    
  }
  const clrtxt =() =>{
    setText("")
    setAlert("Text Cleared Sucessfully !!")
    setAsd({display : "block",transition : "all 2s ease-in-out"})
    setTimeout(()=>{setAsd({display : "none",transition : "all 2s ease-in-out"});},5000);
  }
  const handleOnChange = (event) => {

      setText(event.target.value);
    navigator.clipboard.writeText({Text});
    
  }
  const oncopy = (event) => {
    navigator.clipboard.writeText({Text})
    setAlert("Text Copied Sucessfully !!")
    setAsd({display : "block",transition : "all 2s ease-in-out"})
    setTimeout(()=>{setAsd({display : "none",transition : "all 2s ease-in-out"});},5000);
  }
  const[asd, setAsd] = useState({
  display : "none",
  transition : "all 2s ease-in-out"
  })
  return(
    <>
      <div className="alert alert-primary" id="alert" role="alert" style={asd}>
        {alert}
      </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label"><h2>Enter Your text below</h2></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}>
      </textarea>
      <button type="button" className="btn btn-primary my-3 mx-4" onClick={onpress}>Convert to Upper Case</button>
      <button type="button" className="btn btn-info my-3 mx-4" onClick={onpresslc}>Convert to Lower Case</button>
      <button type="button" className="btn btn-primary my-3 mx-4" onClick={clrtxt}>Clear Text</button><button type="button" className="btn btn-primary my-3 mx-4" onClick={oncopy}>Copy Text</button><br></br>
      <h3>Summary</h3>
      <div>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters </div><br></br>
      <h4>Preview</h4>
      <div>{text}</div>
    </div>
      </>
  )}
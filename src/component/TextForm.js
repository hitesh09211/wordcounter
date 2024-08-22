import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(prop) {
    
  const handleupclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    prop.showalert("the text coverted to upper case ", "Success!");
  }
  const handleolclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    prop.showalert("the text coverted to lower case ", "Success!");
  }
  const handle=()=>{
    let newText="";
    setText(newText);
  }
 const handleonchnage=(event)=>{
   setText(event.target.value);
 }
 const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    prop.showalert("the text is copied","Success!");
  };
  const wordCount = () => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };
 const[text,setText]=useState("");
  return (
    <>
   
    <h1 style={{color:prop.mode===`dark`?`white`:`black`}}>{prop.heading}</h1>
<div class="mb-3">
  <textarea className="form-control" id="box" rows="8" value={text} onChange={handleonchnage} style={{color:prop.mode===`dark`?`white`:`black`,backgroundColor:prop.mode===`dark`?`#1d1f1f`:`#c3c9c9`, border:`2px solid ${prop.mode===`dark`?`white`:`black`}`}} ></textarea>
</div>
   <button className="btn btn-info mx-3" onClick={handleupclick} style={{ color:prop.mode===`dark`?`black`:`white`}}>Convert to uppercase</button>
   <button className="btn btn-info mx-3" onClick={handleolclick} style={{ color:prop.mode===`dark`?`black`:`white`}}>Convert to lowerrcase</button>
   <button className="btn btn-info mx-3" onClick={handle} style={{ color:prop.mode===`dark`?`black`:`white`}}>Clear</button>
   <button className="btn btn-info mx-3" onClick={handleCopyClick} style={{ color:prop.mode===`dark`?`black`:`white`}}>copy</button>
   <div className="container">

    <p style={{color:prop.mode===`dark`?`white`:`black`}}> word:{wordCount()} character: {text.length}</p>

    <h2 style={{color:prop.mode===`dark`?`white`:`black`}}>Preview</h2>
    <p style={{ color:prop.mode===`dark`?`white`:`black`}}>{text}</p>
   </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
  };
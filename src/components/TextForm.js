import React,{useState} from 'react'

export default function TextForm(props) {
 // const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    console.log("UpperCase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  
  const handlelowClick = () => {
    console.log("LowerCase was Clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  
  const handleClearClick = () => {
    console.log("LowerCase was Clicked: " + text);
    let newText = "";
    setText(newText);
  };


  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  /*const handleCapitalize = (word) => {
    if (typeof word === 'string') {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    } else {
      // Handle the case where 'word' is not a string
      console.error('Input is not a string.');
      return word; // Return the input as is, or you can return an empty string or another default value.
    }
  }*/
  
  


 const [text, setText] = useState('Enter text here');
  
  return (
    <>
    <div className="container" style={{color: props.mode=='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=='dark'?'grey':'white', color:props.mode=='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button> 
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
    {/*<button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize Text</button> */}
   
    </div><br/>
    <br/>

    <div className="container" style={{color: props.mode=='dark'?'white':'#042743'}}>
      <h2>Yout text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}</p>
      <br/>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpChange = () =>{
        const lokapal = text.toUpperCase();
        settext(lokapal)
        props.showalert("Converted to Uppercase!", "success")
    } 
    
    const handlelowChange = () =>{
        const lokapal = text.toLowerCase();
        settext(lokapal)
        props.showalert("Converted to Lowercase!", "success")
    } 

    const handleClear = () =>{
      const lokapal = '';
      settext(lokapal)
      props.showalert("Cleared the text!", "success")
  } 

  const handleCopytext = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to clipboard!", "success")
  }

  const handleRmv = () =>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "))
    props.showalert("Removed Extra Space!", "success")
  }

  function lengthOfWord(word) {
    let count = 0
    for (let i = 0; i < text.split(" ").length; i++) {
        if (text.split(" ")[i] == "") {
            count++
        }
    }
    return text.split(" ").length - count
}

    const handleOnChange = (event) =>{
        settext(event.target.value)
    } 



  const [text, settext] = useState("");
  return (
    <div>
     <div className="mb-3">
     <h3 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} />
     </div>
    <button type="button" className="btn btn-primary mx-2" onClick={handleUpChange}>Upper Case</button>
    <button type="button" className="btn btn-info mx-2" onClick={handlelowChange}>Lower Case</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleCopytext}>Copy Text</button>
    <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleRmv}>RemoveExtraSpace</button>
    <div className='mb-3 my-4' style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>The count master is here</h3>
      <p>{lengthOfWord(text)} words and {text.length} characters</p>
    </div>
    <div className='mb-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h3>Preview</h3>
    <p> {text.length>0?text:'Enter something in the textarea to preview here'} </p>
    </div>
    </div>
  )
}




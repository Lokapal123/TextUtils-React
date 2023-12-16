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
    navigator.clipboard.writeText(text);
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
     <h3 style={{color: props.mode==='dark'?'white':'black'}} className='mb-4'>{props.heading}</h3>
     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#163854':'white',color:props.mode==='dark'?'white':'black'}} />
     </div>
    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpChange}>Upper Case</button>
    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handlelowChange}>Lower Case</button>
    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopytext}>Copy Text</button>
    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleRmv}>RemoveExtraSpace</button>
    <div className='mb-3 my-4' style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>The count master is here</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    <div className='mb-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h3>Preview</h3>
    <p> {text.length>0?text:'Nothing to Preview!'} </p>
    </div>
    </div>
  )
}




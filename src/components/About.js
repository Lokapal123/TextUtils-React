import React, { useState } from 'react'

export default function About(props) {

let mynext = {
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
}
  return (
    <div>
        <div className='container'style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <div className="accordion" id="accordionExample">
      <h2 className='my-3'>About Us</h2>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mynext} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze to text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mynext}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mynext} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mynext}>
      <div className="accordion-body">
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of owrds and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mynext} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mynext}>
      <div className="accordion-body">
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <button type='button' onClick={toggleup} className='btn btn-primary my-3'> {mybtn} </button> */}
</div>
    </div>
  )
}

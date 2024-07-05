import React, {useState} from 'react'

export default function TextForm() {


  function rewriteSentence(sentence) {
    sentence = sentence.trim();
  
    let words = sentence.split(' ');
  
    let rewrittenSentence = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        let prevWord = words[index - 1];
        if (prevWord.charAt(prevWord.length - 1) === '.') {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      }
    }).join(' ');
  
    return rewrittenSentence;
  }
    
  

  
  

  let sentence1=()=>
    {
      let newtext3=rewriteSentence(yourtext);
  classtext(newtext3);
    } 


  

   
  let convertUpperCase =()=>
  {
    console.log("changing to upper case");
    let newtext=yourtext.toUpperCase();
    classtext(newtext);
  }

    let convertLowerCase =()=>
      {
        console.log("changing to lower case");
        let newtext2=yourtext.toLowerCase();
        classtext(newtext2);

  }
  
  let change=(event)=>
    {
      classtext(event.target.value);
    }

  const [yourtext, classtext] = useState("");
  
  return (
    
    
    <> 
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your message</label>
  <textarea onChange={change} className="form-control" value={yourtext} id="exampleFormControlTextarea1" rows="5" placeholder="message will be displayed here"></textarea>
  <div style={{ marginRight: '10px', marginTop:'10px'}}>
  <button className='btn btn-primary' style={{ marginRight: '10px'}} onClick={convertUpperCase}>Convert to Uppercase <br/></button>
  <button className='btn btn-primary' style={{ marginRight: '10px'}} onClick={convertLowerCase}>Convert to Lowercase</button>
  <button className='btn btn-primary' onClick={sentence1}>Convert to Normal sentence Format</button>
  </div>
    </div>

<div className="container my-3">
<h1>Text summary </h1>
<p> {yourtext.split(" ").length} and {yourtext.length} charecters</p>
</div>
</> 

  )
}

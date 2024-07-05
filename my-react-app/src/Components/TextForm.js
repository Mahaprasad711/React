import React, {useState} from 'react'

export default function TextForm() {


  function rewriteSentence(sentence) {
    // Trim any extra whitespace from the beginning and end of the sentence
    sentence = sentence.trim();
  
    // Split the sentence into words
    let words = sentence.split(' ');
  
    // Capitalize the first word and convert the rest to lowercase
    let rewrittenSentence = words.map((word, index) => {
      // Capitalize the first word
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        // Check if the previous word ended with a full stop (.)
        // and capitalize the current word accordingly
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
    
    <div>
      
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your message</label>
  <textarea onChange={change} className="form-control" value={yourtext} id="exampleFormControlTextarea1" rows="5" placeholder="message will be displayed here"></textarea>
  <div style={{ marginRight: '10px', marginTop:'10px'}}>
  <button className='btn btn-primary' style={{ marginRight: '10px'}} onClick={convertUpperCase}>Convert to Uppercase <br/></button>
  <button className='btn btn-primary' style={{ marginRight: '10px'}} onClick={convertLowerCase}>Convert to Lowercase</button>
  <button className='btn btn-primary' onClick={sentence1}>Convert to Normal sentence Format</button>

  

  </div>
  </div>
    </div>
  )
}

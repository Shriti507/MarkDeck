import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
  const[text,setText]=useState(" ")
  const[isSubmit, setIsSubmit]=useState(" ")


  const handleInput=(e)=>{
    setText(e.target.value)
  }
  const handleButton=(e)=>{
      setIsSubmit(e.prevent.default)
  }


  return (
    <div className='flex h-screen w-full'>
      
      

      
      {/* left side panel */}
        <div className='w-1/2 h-full bg-amber-50 p-5'>

        <textarea  className='w-full h-full bg-transparent text-white outline-none font-mono resize-none' onChange={handleInput} value={text} placeholder='type your markdown text here...'></textarea>
        </div>

      {/* right side panel */}
      <div className='w-1/2 h-full bg-slate-100 flex items-center justify-center p-8'>

        {/* This is your 'Slide' Card */}
          <div className="w-full aspect-video bg-white shadow-xl rounded-lg p-10">
            <h1 className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Preview</h1>
            <div className="text-black prose lg:prose-xl max-w-none">
              {/* This is where your Markdown content will eventually be rendered */}
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
      </div>

      </div>

    </div>
  
  )
}

export default App
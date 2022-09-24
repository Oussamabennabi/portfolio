import React from 'react'

const MyName = () => {

    return (
      <h1 className="my-name">
            {/* evry char sould have a new color "dont be gay" */}
            
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">O</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">u</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">s</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">s</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">a</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">m</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">a</span>
        <div className='space'></div>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">B</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">e</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">n</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">n</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">a</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">b</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">i</span>
        <span onMouseEnter={(e)=>e.target.className = "char animated"} onMouseLeave={e=>setTimeout(()=>{e.target.className = "char"},800)} className="char">.</span>
      </h1>
    );
}

export default MyName
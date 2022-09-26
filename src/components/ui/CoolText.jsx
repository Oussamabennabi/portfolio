import React from 'react'

const CoolText = ({ text}) => {
    const arr =  Array(text.length)
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        arr.push(char)
    }
    return <>
        { arr.map((char, i) => {
            if (char === " ") {
                return <div key={i} className='space'></div>
            } else {
              return <span
                key={i}
                onMouseEnter={(e) => (e.target.className = "char animated")}
                onMouseLeave={(e) =>
                  setTimeout(() => {
                    e.target.className = "char";
                  }, 800)
                }
                className="char"
              >
                  { char}
              </span>;
            }
        })}
    </>;
}

export default CoolText
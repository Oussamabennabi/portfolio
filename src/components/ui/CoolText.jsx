import React,{useMemo} from 'react'

const CoolText = ({ text}) => {
  
  const arr = useMemo(() => {
     const temp = Array(text.length)
     for (let i = 0; i < text.length; i++) {
         const char = text[i];
         temp.push(char)
     }
     return temp
  }, [text])
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
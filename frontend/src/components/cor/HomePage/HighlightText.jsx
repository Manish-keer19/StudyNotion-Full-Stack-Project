import React from 'react'

function HighlightText({text,text_color='text-[#31E0EF]'}) {
  return (
    <span className={`font-bold ${text_color}`}>
   {" "}
   {text}
    </span>
  )
}

export default HighlightText
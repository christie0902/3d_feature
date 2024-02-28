import React from 'react'

const PresetIcon = ({src, name, setFile}) => {
  return (
    <div className="inline-block p-1 border-2 border-gray-300 rounded-lg m-1 cursor-pointer">
      <div
        className="w-8 h-8 flex items-center justify-center"
        onClick={() => setFile("./" + src)}
      >
        <img src={"./" + src} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default PresetIcon
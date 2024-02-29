import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const PresetIcon = ({src, name, setFile, setShowBtn}) => {
 const snap = useSnapshot(state);
  return (
    <div className="inline-block p-1 border-2 border-gray-300 rounded-lg m-1 cursor-pointer" style={{backgroundColor: snap.color}}>
      <div
        className="w-12 h-12 flex items-center justify-center"
        onClick={() => {
          setShowBtn(true);  
          setFile(src)}
        }
      >
        <img src={src} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default PresetIcon
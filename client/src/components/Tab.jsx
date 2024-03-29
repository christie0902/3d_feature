import { isDragActive } from 'framer-motion'
import React from 'react'
import { useSnapshot  } from 'valtio'
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state);
  const activeStyles = isFilterTab && isActiveTab ?
  {backgroundColor: snap.color, opacity:1}
  : {backgroundColor:"transparent", opacity:0.8};
  return (
    <div
      key={tab.name}
      className={`tab-btn flex flex-col items-center justify-center' : 'rounded-lg flex flex-col items-center justify-center ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}

    >
      <img src={tab.icon} alt={tab.name} 
      className={`${isFilterTab ? 'w-2/3 h-2/3':'w-11/12 h-11/12 object-contain'}`}
      />
      <span className={`font-bold ${isFilterTab ? 'text-xs' : 'text-sm'}`} style={{color: getContrastingColor(snap.color)}}>{tab.label}</span>
    </div>
  )
}

export default Tab
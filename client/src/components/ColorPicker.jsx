import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap=useSnapshot(state);
  return (
    <div
     className='absolute left-full ml-3'
    >
      <SketchPicker
      color={snap.color}
      disableAlpha
      //set preset colors on the picker
      presetColors={[
        "#ccc",
        "#EFBD4E",
        "#80C670",
        "#697689",
        "#ff5722",
        "#a091eb",
        "#fc0384",
        "#D9E3F0",
        "#6697ad",
        "#214859",
        "#0d3d16",
        "#212622"

      ]}
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
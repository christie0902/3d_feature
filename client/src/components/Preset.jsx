import { useEffect, useState } from "react";
import React from "react";

import CustomButton from "./CustomButton";
import PresetIcon from "./PresetIcon";

const Preset = ({setFile, handleFile}) => {
  //    const  getImage = async () => {
  //     const response = await fetch ('/api/presets');
  //     const presets = await response.json();

  //     display(presets);
  //    }

  const presets = [
    {
      file_name: "logo1.png",
      description: "Logo of RE2",
    },
    {
      file_name: "logo2.png",
      description: "Logo of RE2",
    },
    {
      file_name: "logo3.png",
      description: "Logo of RE2",
    },
  ];
  const display = (presetImgs) => {
    return presetImgs.map((preset, i) => (
      <div key={preset.file_name + i}>
        <PresetIcon
          src={preset.file_name}
          name={preset.file_name}
          setFile={setFile}          
        />
      </div>
    ));
  };

  return (
    <div className="preset-container flex flex-col">
      <div className="flex flex-wrap gap-1">{display(presets)}</div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => handleFile('logo')}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => handleFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default Preset;

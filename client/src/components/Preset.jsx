import { useEffect, useState } from "react";
import React from "react";

import CustomButton from "./CustomButton";
import PresetIcon from "./PresetIcon";
import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import logo3 from "/logo3.png";
import logo4 from "/logo4.png";
import logo5 from "/logo5.png";
import logo6 from "/logo6.png";
import pattern1 from "/pattern1.jpg";
import pattern2 from "/pattern2.png";
import pattern3 from "/pattern7.jpg";
import pattern4 from "/pattern4.jpg";

const Preset = ({file, setFile, handleFile}) => {
const [showBtn, setShowBtn] = useState(false)


  //    const  getImage = async () => {
  //     const response = await fetch ('/api/presets');
  //     const presets = await response.json();

  //     display(presets);
  //    }

  const presets = [
    {
      file: logo1,
      description: "Logo of RE2",
    },
    {
      file: logo2,
      description: "Logo of RE2",
    },
    {
      file: logo3,
      description: "Logo of RE2",
    },
    {
      file: logo4,
      description: "Logo of RE2",
    },
    {
      file: logo5,
      description: "Logo of RE2",
    },
    {
      file: logo6,
      description: "Logo of RE2",
    },
    {
      file: pattern1,
      description: "Logo of RE2",
    },
    {
      file: pattern2,
      description: "Logo of RE2",
    },
    {
      file: pattern3,
      description: "Logo of RE2",
    },
    {
      file: pattern4,
      description: "Logo of RE2",
    },
    {
      file: logo5,
      description: "Logo of RE2",
    },
    {
      file: logo5,
      description: "Logo of RE2",
    },
    {
      file: logo5,
      description: "Logo of RE2",
    },
    {
      file: logo5,
      description: "Logo of RE2",
    }
  ];
  const display = (presetImgs) => {
    return presetImgs.map((preset, i) => (
      <div key={preset.file + i}>
        <PresetIcon
          src={preset.file}
          name={preset.file}
          setFile={setFile}
          setShowBtn={setShowBtn}          
        />
      </div>
    ));
  };

  return (
    <>

    <div className="preset-container flex flex-col overflow-auto scrollbar-hidden">
      <div className="flex flex-wrap gap-1 flex-grow min-h-0">{display(presets)}</div>
    </div>
    {showBtn &&<div className="preset-container flex flex-row relative m-0 gap-3" style={{top: '100%', height: '60px' }}>
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => {
            handleFile('logo', file)
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => handleFile('full', file)}
          customStyles="text-xs"
        />
    
      </div>}
    </>
  );
};

export default Preset;

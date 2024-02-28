import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import bgImage from '../assets/background.jpg';

const Home = () => {
  const snap = useSnapshot(state);
  return (
  
    <AnimatePresence>
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`
        }}
      />
      {snap.intro && 
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./threejs.png"
                alt="logo"
                className="w-20 h-20 object-contain"
              />
            </motion.header>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                R.E. MALL <br className="xl:block hidden" /> CUSTOMIZER{" "}
              </h1>
            </motion.div>

            <motion.div
              {...headContainerAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-space">
                Create your unique and exclusive RE shirt with our brand new 3D
                customization tool. <strong>Use your image!</strong>
                {""} and define your own style
              </p>

              <CustomButton
                type="filled"
                title="Customize It!"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      }
     
    </AnimatePresence>
   
  );
};

export default Home;

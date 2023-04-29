import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { NextPage } from "next";    

const MainGraphic = () => {

    return (
        <div className="w-full h-full flex flex-row items-center">
            <div className="w-6/12 h-36 mt-24 mb-96 ml-12 flex flex-col items-center ">
                <div className="text-3xl flex mt-16">Using Convolutional Neural Networks</div>
                <div className="text-3xl flex">to Help you With your Math:</div>
                <div className="text-xl flex mb-20">Upload your image below:</div>
                <motion.a
                transition={{ type: "spring", stiffness: 500 }}
                whileHover={{ scale: 1.15 }}
                href={"https://legacy.reactjs.org/docs/getting-started.html"}
                >
                    <div class="flex items-center justify-center">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-96 h-40 border-[3px] border-ncc-brown rounded-lg cursor-pointer bg-ncc-beige">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-ncc-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-ncc-brown"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-ncc-brown">SVG | PNG | JPG</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </motion.a>
            </div>
            <div className="w-1 h-[32rem] ml-32  bg-ncc-brown "/>
            <div className="mr-0">
                <img className="w-[1000px]" src="phone.png" alt="phone" />
            </div>
        </div>
    )
}

export default MainGraphic;

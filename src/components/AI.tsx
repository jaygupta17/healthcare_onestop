"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { textTotext } from "@/utils/gemini";
import { MessageSquareReply, MicIcon } from "lucide-react";

export default function AI() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [data, setData] = useState("");
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const handleClick = () => {
    setIsChatbotOpen(!isChatbotOpen);
    setresponse("");
    setData("");
  };

  const voiceAssistant = () => {
    setIsVoiceOpen(!isVoiceOpen);
  };

  const handleChatResponse = async () => {
    const response = await textTotext(data);
    setresponse(response);
  };

  const [response, setresponse] = useState("");

  return (
    <div className="container relative h-[50%]">
      <div className="spline-container fixed bottom-0 right-1 z-10 h-[20%] w-[10%]">
        <Spline
          scene="https://prod.spline.design/swFUPPJBxfIdhq9X/scene.splinecode"
          className=""
          onClick={handleClick}
        />
      </div>
      <div
        className={` fixed h-[50%] w-[25%] bg-[#464545] rounded-lg text-black text-2xl font-sans flex justify-center bottom-[18%] right-[3%]  ${
          isChatbotOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2 font-sans w-[90%]">
          Jarvis
          <div className="ml-1.5 h-[75%] w-[95%] rounded-md text-white text-sm">
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
              </div>
            </div>
            {response.slice(0, 300)}
          </div>
          <div className="flex flex-row gap-2 w-[95%] ml-1.5">
            <input
              className="w-[100%] rounded-md text-white pl-1 text-sm"
              placeholder="Search"
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></input>
            <button
              className="bg-cyan-500 w-[10%] rounded-md text-sm p-1"
              onClick={handleChatResponse}
            >
              <MessageSquareReply />
            </button>
            <button
              className="bg-cyan-500 w-[10%] h-8 rounded-md text-sm p-1"
              onClick={voiceAssistant}
            >
              <MicIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";

export function EvervaultCardDemo() {
  return (
    <>
      <h1 className="flex justify-center items-center text-2xl font-bold md:text-4xl  text-black mt-[3%] mb-[3%]">
        What We Offer
      </h1>
      <div className="flex mt-[4%] mb-[5%]">
        <div className="border bg-black border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="AR/VR" />

          <h2 className="text-white mt-4 text-md font-semibold">
            AR/VR based healthcare tour of Healthcare facilities for a more immersive experience.
          </h2>
          <Link href={'./room'}>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
          </Link>
        </div>
        <div className="border bg-black border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Funding" />
          
          <h2 className="text-white mt-4 text-md font-semibold">
            Blockchain based Funding System for Healthcare Facilities.
          </h2>
          <Link href={"/funding"}> 
          <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
          </Link >
        </div>
        <div className="border bg-black  border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="AI" />

          <h2 className="text-white mt-4 text-md font-semibold">
            AI based healthcare assistant for personalized healthcare solutions.
          </h2>
          <Link href={"/chatbot"}> 
          <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
          </Link>
        </div>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";

export function EvervaultCardDemo() {
  const cards = [
    {
      title: "AR/VR",
      description: "AR/VR based healthcare tour of Healthcare facilities for a more immersive experience.",
      link: "./room"
    },
    {
      title: "Funding",
      description: "Blockchain based Funding System for Healthcare Facilities.",
      link: "/funding"
    },
    {
      title: "AI",
      description: "AI based healthcare assistant for personalized healthcare solutions.",
      link: "/ai"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-black text-center my-8">
        What We Offer
      </h1>
      <div className="flex flex-col gap-16 md:gap-8 md:flex-row justify-center items-center">
        {cards.map((card, index) => (
          <div key={index} className="border bg-black border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full max-w-sm p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard text={card.title} />

            <h2 className="dark:text-white text-black mt-4 text-md font-semibold">
              {card.description}
            </h2>
            <Link href={card.link}>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Watch me hover
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
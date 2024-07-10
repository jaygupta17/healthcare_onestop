"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="container mx-auto mt-[10%] px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-black text-center mb-8">
        Testimonials
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full mb-8">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="w-full max-w-[340px] bg-[#e3e3e3] rounded-md shadow-lg shadow-black/10">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={`https://nextui.org/avatars/avatar-${index}.png`} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                  <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                </div>
              </div>
              <Button
                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
              >
                {isFollowed ? "Unfollow" : "Follow"}
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey 
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">4</p>
                <p className="text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">97.1K</p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
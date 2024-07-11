// src/app/complaint/page.tsx
'use client';
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "./campaign-card";
import { ConnectBtn } from "./connect-btn";
import { Web3Context } from "@/context/Web3Context";
import { CampaignForm } from "./campaign-form";

const CampaignPage = () => {
  const {getCampaigns} = useContext(Web3Context)
  const [isOpen,setIsOpen] =useState(false);
  const [campaigns,setCampaigns] = useState<any>([])
  const open=()=>{
    setIsOpen((prev)=>!prev)
  }
  function close(){
    setIsOpen(false)
  }
  
  useEffect(()=>{
    getCampaigns().then((res:any)=>setCampaigns(res.reverse()))
  },[])
  
  return(
    <div className="w-full min-h-screen py-8 gap-y-8 flex flex-col  items-center bg-zinc-900">
      <ConnectBtn/>
        <div className="w-[90%] text-center cursor-pointer font-bold tracking-wide py-4 bg-gradient-to-b hover:from-gray-200 hover:to-gray-400 from-gray-50 to-gray-400 rounded-lg" onClick={open}>Add Campaign</div>    
        <div className={isOpen ? "w-full px-4 md:w-[90%] gap-y-2 justify-center flex-col items-center flex" : "hidden"}>
          <Button onClick={close} className="bg-gray-700">Close</Button>
        <CampaignForm />
        </div>
        <div className="grid place-content-center gap-y-8 grid-cols-1 w-[90%]">
          {campaigns.map((camp:any)=>(
            <CampaignCard key={camp.pId} pId={camp.pId} owner={camp.owner} amountCollected={camp.amountCollected} descr={camp.descr} target={camp.target} title={camp.title}/>
           
))}
        </div>
    </div>
  )
};

export default CampaignPage;
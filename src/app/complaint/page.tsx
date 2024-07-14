'use client';

import { useEffect, useState } from "react";
import { ComplaintCard } from "./complaint-card";
import { ComplaintForm } from "./complaint-form";
import { Button } from "@/components/ui/button";
import { getComplaint } from "../../../actions";

interface complaint{
  id?: string;
  username: string;
  subject: string;
  issue: string;
  disease: string;
  descr: string;
  contact: string;
  evidence: string;
}

const ComplaintPage = () => {
  const [isOpen,setIsOpen] =useState(false);
  const [data,setData] = useState<any>([])
  const open=()=>{
    setIsOpen((prev)=>!prev)
  }
  function close(){
    setIsOpen(false)
  }
  useEffect(()=>{
    getComplaint().then(comp=>setData(comp.complaint?.documents))
  },[])
  return(
    <div className="w-full py-8 gap-y-8 flex flex-col  items-center bg-zinc-900 min-h-screen">
        <div className="w-[90%] text-center cursor-pointer font-bold tracking-wide py-4 bg-gradient-to-b hover:from-gray-200 hover:to-gray-400 from-gray-50 to-gray-400 rounded-lg" onClick={open}>Add complaint</div>    
        <div className={isOpen ? "w-full px-4 md:w-[90%] gap-y-2 justify-center flex-col items-center flex" : "hidden"}>
          <Button onClick={close} className="bg-gray-700">Close</Button>
        <ComplaintForm />
        </div>
        <div className="grid place-content-center gap-y-8 grid-cols-1 w-[90%]">
          {data.length ? data.map((complaint : complaint)=>(
            <ComplaintCard key={complaint.descr} contact={complaint.contact} disease={complaint.disease} descr={complaint.descr} evidence={complaint.evidence} username={complaint.username} issue={complaint.issue} subject={complaint.subject} />
          )) : "Nothing to see" }
        </div>
    </div>
  )
};

export default ComplaintPage;

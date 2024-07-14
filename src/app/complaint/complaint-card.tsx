"use client"
import { ReplyIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


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
export const ComplaintCard = ({username,subject,issue,disease,descr,contact,evidence} : complaint) => {
    const [open, setopen] = useState(false)
    return(
        <div className="w-full gap-y-3 flex flex-col px-4 py-4 bg-white/10 hover:bg-white/5 border border-white/80">
                <div className="flex self-start items-center gap-4">
                    <Image className="w-10 h-10 rounded-full" width={20} height={20} src="/adminuser/back.jpg" alt="bnone" />
                    <div className="font-medium text-white">
                        <div className="font-medium text-white">{username}</div>
                        <div className="text-sm font-medium text-gray-400">{contact}</div>
                    </div>
                </div>
                <div className="text-white/80 font-normal">
                   {descr}
                </div>
                <div className="flex gap-x-3 text-white/50">
                    <p>
                        {"Disease: " + disease}
                    </p>
                    <p>
                        {"subject: " + subject}
                    </p>
                    <p>
                        {"issue: " + issue}
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-white/90 tracking-wide font-semibold">Attachements:</p>
                    <div className="flex text-white/60 flex-wrap gap-2">
                        {"Evidence: " + evidence}
                    </div>
                </div>
                {open ?<div className="flex gapy-x-2"> <input className="placeholder:italic placeholder:text-slate-700 block bg-white/70 w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Reply..." type="text"/>
                    </div > : <div className="flex text-white">Reply &nbsp;  <ReplyIcon onClick={()=>setopen(true)} className="text-white cursor-pointer size-8"/></div>}
        </div>
    )
}

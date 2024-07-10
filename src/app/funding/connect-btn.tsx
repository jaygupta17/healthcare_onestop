"use client"

import { Button } from "@/components/ui/button"
import { Web3Context } from "@/context/Web3Context"
import { useContext } from "react"

export const ConnectBtn = ( ) => {
    const {connectWallet , address} = useContext(Web3Context)
    return(
        <div className="flex justify-center items-center">
                <Button variant="secondary" onClick={()=>connectWallet()} >
                    {address == "" ? "Connect" : address}
                </Button>
        </div>
    )
}
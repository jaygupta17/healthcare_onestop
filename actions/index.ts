"use server"

import { formSchema } from "@/app/complaint/complaint-form"
import { createAdminClient } from "@/app/appwrite/config"
import { ID ,AppwriteException} from "node-appwrite"


export const createComplaint = async (values:any) => {
    try {
        const {db} =await createAdminClient()
        const {username,subject,issue,disease,descr,contact,evidence}= values
        const doc = await db.createDocument(
            process.env.NEXT_APPWRITE_DB!,
            process.env.NEXT_APPWRITE_COMPLAINT!,
            ID.unique(),
            {
                username,subject,disease,issue,descr,contact,evidence
            }
        )   
       console.log(doc);
       
    } catch (error:any) {
        console.log(error);
    }
    
}

export const getComplaint = async () => {
    try {
        const {db} = await createAdminClient()
    const complaint = await db.listDocuments(process.env.NEXT_APPWRITE_DB!,process.env.NEXT_APPWRITE_COMPLAINT!)
    console.log(complaint);
    
     return {
            complaint
    }
    } catch (error) {
        return {
            error:"error occured"
        }
    }
}

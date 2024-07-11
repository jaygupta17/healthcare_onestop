"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

  
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SetStateAction, useContext } from "react"
import { Web3Context } from "@/context/Web3Context"
import toast, { Toaster } from "react-hot-toast"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  descr: z.string(),
  target: z.string(),
})

export function CampaignForm() {
  const {checkIfWalletConnected,loading} = useContext(Web3Context)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    },
  })
  const {createCampaign} = useContext(Web3Context)
  function onSubmit(values: z.infer<typeof formSchema>) {
    checkIfWalletConnected().then((res:any)=>{
        if(res.error){ return alert(res.error)}
        if (res.success){
          createCampaign(values).then((res:any)=>{
            if(res.success) alert(res.success)
              if(res.error) alert(res.error)
          })
        }
    })
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-[70vw] bg-white/10 p-5 rounded-lg w-[95vw] space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="target"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Amount</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descr"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-gray-700">Submit</Button>
      </form>
    </Form>
  )
}

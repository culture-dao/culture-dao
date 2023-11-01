"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter an Email Address",
  }).email('Please enter a valid Email Address.'),
})

export default function Newsletter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(`You have submitted: ${values.email}`)
  }

  return (
    <footer className='flex flex-col gap-8 justify-center items-center py-12'>
      <h2 className='uppercase'>Stay Updated - Join Our Mailing List</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="name@email.com" className='w-60' {...field} />
              </FormControl>
              {/* <FormDescription>
                We will never share your Email Address with anyone.
              </FormDescription> */}
              <FormMessage className='text-red-400' />
            </FormItem>
          )}
        />
        <Button variant={'outline'} type="submit">Submit</Button>
      </form>
    </Form>
    </footer>
  )
}
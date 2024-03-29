"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RevealWrapper, RevealList } from 'next-reveal'

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter an email address",
  }).email('Please enter a valid email address'),
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
    form.reset()
  }

  return (
    <section className='flex flex-col gap-8 justify-center items-center py-32'>
        <RevealWrapper delay={150} desktop={false}>
          <div className='flex flex-col text-center md:flex-row md:text-left mb-24'>
            <h3 className='uppercase text-2xl text-center md:text-left'>Stay Updated</h3>
            <div className='mx-2 text-2xl hidden md:block'>{' - '}</div>
            <div className='my-1 md:hidden'></div>
            <h3 className='uppercase text-2xl text-center md:text-left'>Join Our Mailing List</h3>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={150}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='relative flex flex-col justify-center items-center w-80'>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormControl>
                        <Input placeholder='name@email.com' className='pr-32 h-12 ring-1' {...field} />
                      </FormControl>
                      <FormMessage className='absolute top-16 text-red-400' />
                    </>
                  )}
                />
                <Button type="submit" className='absolute right-1 h-10'>Subscribe</Button>
              </div>
              <FormMessage className='text-destructive' />
            </form>
          </Form>
        </RevealWrapper>
      </section>
  )
}
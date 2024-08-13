import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { SigninValidation } from "@/lib/validation"
import { z } from "zod"



const SigninForm = () => {

  const isLoading = true;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SigninValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
      <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">

        <h3 className="h2-bold pt-5 sm:pt-12">
          Account Signin
        </h3>
        <p className="small-text">
          Enter your details to use Educator
        </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex 
      flex-col gap-1.5 w-full mt-1.5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username or Email</FormLabel>
              <FormControl>
                <Input type="text email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="small-text" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="small-text" />
            </FormItem>
          )}
        />
        <Button type="submit">
        {isLoading ? (
            <div className="flex-center gap-2">
              <Loader />
            </div>
          ): "Log In"}
        </Button>
        <p className="text text-center mt--1">
          Don't have an account?
          <Link to="/sign-up" className="link">Sign Up</Link>
        </p>
      </form>
      </div>
    </Form>
  )
}


export default SigninForm
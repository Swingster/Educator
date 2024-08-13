import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { useCreateUserAccount } from "@/lib/react-query/queriesAndMutations"




const SignupForm = () => {
  const { toast } = useToast();
  const isLoading = false;

  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } = 
  useCreateUserAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);

    if(!newUser){
      return toast({
        title: "Signup failed, please try again."
      })
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })
  
    if(!session) {
      return toast({ title: 'Sign in failed. Please try again' }) 
    }
  }

  return (
      <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">

        <h3 className="h2-bold pt-5 sm:pt-12">
          Account Signup
        </h3>
        <p className="small-text">
          To use Educator, please enter your details
        </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex 
      flex-col gap-4 w-full mt-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="small-text" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="small-text" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="small-text"/>
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
          {isCreatingUser ? (
            <div className="flex-center gap-2">
              <Loader />
            </div>
          ): "Sign up"}
        </Button>
        <p className="text text-center mt--1">
          Already have an account? 
          <Link to="/sign-in" className="link">Log in</Link>
        </p>
      </form>
      </div>
    </Form>
  )
}

export default SignupForm
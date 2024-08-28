"use client"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';

const formSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().nonempty("Password is required")
})

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }

  })

  const router = useRouter()

  const [error, setError] = useState(null)

  const handleSubmit = (data) => {
    axios.post(process.env.NEXT_PUBLIC_API_URL + 'student/login/', data)
      .then((res) => {

        Cookies.set('auth', JSON.stringify(res.data) , { expires: 77 })

        router.push('/dashboard')

      })
      .catch((err) => {
        setError(err.response.data.message)
        
      })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className='flex flex-col gap-4'>
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* <FormLabel>Email Address</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        {...field}
                        className="text-left"
                      />
                    </FormControl>
                  </FormItem>
                )
              }}
            />

            <FormField
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* <FormLabel>Password</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        className="text-left"
                      />
                    </FormControl>
                  </FormItem>
                )
              }}
            />

            {error && <p className='text-red-500'>{error}</p>}

            <Button type="submit">Login</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm

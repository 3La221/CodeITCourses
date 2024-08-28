"use client"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';


const formSchema = z.object({
  first_name: z.string().nonempty("This field is required"),
  last_name: z.string().nonempty("This field is required"),
  email: z.string().email("Invalid email format"),
  phone_number: z.string().min(10, "Phone number must be 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters long")
}).refine((data) => {
  return data.password === data.confirmPassword
}, {
  message: "Passwords do not match",
  path: ['confirmPassword']
})

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      phone_number: ''
    }
  })

  const router = useRouter()

  const { handleSubmit, formState: { errors } } = form

  const handleFormSubmit = (data) => {
    data['username'] = data.email
    console.log("data", data)

    axios.post(process.env.NEXT_PUBLIC_API_URL + 'student/', data)
      .then((res) => {
        Cookies.set('auth', JSON.stringify(res.data) , { expires: 77 })
        router.push('/dashboard')
        console.log(res)
      })
      .catch((err) => {
        console.log("ERROR")
        console.log(err)
      })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <FormField
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Last Name</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        {...field}
                        className="text-left"
                      />
                    </FormControl>
                    {errors.last_name && (
                      <p className='text-red-500 text-sm'>{errors.last_name.message}</p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>First Name</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        type="text"
                        {...field}
                        className="text-left"
                      />
                    </FormControl>
                    {errors.first_name && (
                      <p className='text-red-500 text-sm'>{errors.first_name.message}</p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="email"
              render={({ field }) => (
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
                  {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Phone Number</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      type="text"
                      {...field}
                      className="text-left"
                    />
                  </FormControl>
                  {errors.phone_number && (
                    <p className='text-red-500 text-sm'>{errors.phone_number.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              name="password"
              render={({ field }) => (
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
                  {errors.password && (
                    <p className='text-red-500 text-sm'>{errors.password.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Confirm Password</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      className="text-left"
                      {...field}
                    />
                  </FormControl>
                  {errors.confirmPassword && (
                    <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>
                  )}
                </FormItem>
              )}
            />

            <Button type="submit">Register Now</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default RegisterForm

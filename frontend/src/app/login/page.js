import LoginForm from '@/components/forms/LoginForm'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen' style={{ minHeight: 'calc(100vh - 100px)' }}>
      <Card className='h-fit '>
        <CardHeader>
          <CardTitle className="text-left">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
        Don't have an account on Code It?

          <Link href='/register' className='hover:underline transition-all mx-2'>
            Create your account
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login

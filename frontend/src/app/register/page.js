import RegisterForm from '@/components/forms/RegisterForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const Register = () => {
  return (
    <div className='flex justify-center items-center min-h-screen text-left' style={{ minHeight: 'calc(100vh - 100px)' }}>
      <Card className='h-fit w-[500px]'>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="flex justify-start">
            Already have an account? <Link href="/login" className='mx-2 hover:underline'>Log In</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register

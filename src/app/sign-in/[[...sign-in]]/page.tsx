import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='h-screen w-[100%] flex items-center justify-center'>
    <SignIn />
  </div>
}
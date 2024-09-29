import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return <div className="flex items-center justify-center flex-col mt-20 gap-10">
    <h1 className='text-3xl'>Welcome to MiniKart</h1>
  <SignIn />
</div>
}
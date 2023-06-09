import {ChatBubbleOvalLeftIcon} from '@heroicons/react/24/solid'
import AuthForm from './AuthForm';
export default function Home() {
    return (
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <ChatBubbleOvalLeftIcon className='mx-auto w-auto text-blue-400' height={48} width={48}/>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-right to-gray-900">
          Sign in to your account
        </h2>
        </div>
        <AuthForm />
        
      </div>
    )
  }
  
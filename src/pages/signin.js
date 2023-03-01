import { signIn } from "next-auth/react"

export default function Signin() {
  return (
    <div className='bg-green-50 h-screen'>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg space-y-8">
          <div>
          <div className="flex">
                <div className="flex gap-3 mx-auto">
                    <span className="sr-only">CareerMatcha</span>
                    <svg className="h-10 w-10 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><ellipse fill="#292F33" cx="18" cy="26" rx="18" ry="10"/><ellipse fill="#66757F" cx="18" cy="24" rx="18" ry="10"/><path fill="#E1E8ED" d="M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"/><path fill="#77B255" d="M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"/><ellipse fill="#A6D388" cx="18" cy="13" rx="15" ry="7"/><path d="M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z" fill="#5C913B"/></svg>
                    <h1 className='my-auto text-xl font-bold text-green-700 font-plus-jakarta-sans'>CareerMatcha <span className='text-xs font-light'>beta</span></h1>
                </div>
            </div>
            {/* <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2> */}
            
          </div>
          
            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-2 border-gray-300 hover:border-transparent text-gray-900 hover:text-white py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => signIn("google", {callbackUrl: '/paths'})}
              >
                Sign in with Google
              </button>
            </div>
          
        </div>
      </div>
    </div>
  )
}

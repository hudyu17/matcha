import { QueueListIcon } from "@heroicons/react/24/outline";
import axios from 'axios'
import { useState } from "react";
import Success from "./alerts/SuccessAlert";

export default function SignupForm({ setShowSuccess, setShowExists, setShowError }) {

    const [email, setEmail] = useState({
        email: '',
        // subcriptionResponse: '',
        // error: false,
    });

    const handleSubmit = async () => {
        const emailAdd = email.email;  

        // offline testing modals
        // setShowSuccess(true)
        // setShowExists(true)
        // setShowError(true)

        // ONLINE only
        await axios.post('/api/signup', {
            emailAdd
        }).then(res => {
            // console.log(res)
            if (res.status === 200) {
                setShowSuccess(true)
                // axios.post('/api/signup', {emailAdd})
            } 
            setEmail({
                email: '',
                // subcriptionResponse: response.message,
                // error: false,
            });
        }).catch(error => {
            if (error.response.status === 405) {
                setShowExists(true)
            } else {
                setShowError(true)
            }
        })
  }

    return (
        <div>
            <form 
                className="mx-auto flex rounded-md shadow-sm"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    }}
            >
                <div className="text-black flex focus-within:z-10 w-min">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="rounded-none rounded-l-md border-green-800 focus:border-indigo-500 focus:ring-indigo-500 text-sm w-min"
                        placeholder="my@email.com"
                        value={email.email}
                        onChange={(e) => setEmail({ ...email, email: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-green-800 bg-green-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-500 hover:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                    <QueueListIcon className="h-5 w-5" aria-hidden="true" />
                    <span>Join waitlist</span>
                </button>
            </form>
        </div>
    )
}

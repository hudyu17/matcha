import { Switch } from '@headlessui/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MentorSwitch({ enabled, setEnabled, dark }) {
  const { data: session } = useSession()

  const handleChange = async () => {
    const userId = session.user.email;
    setEnabled(!enabled)

    if (enabled) {
        // Remove from db
        await axios.post("/api/unsaveInterest", {
            userId
          }).catch(error => {
            console.log(error.response.data)
          })
    } else {
        // Add to db
        await axios.post("/api/saveInterest", {
            userId
          }).catch(error => {
            console.log(error.response.data)
          })

    }
  }


  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={() => handleChange()}
        className={classNames(
          enabled ? 'bg-green-700' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white border-2 border-green-600 shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-2 sm:ml-3 text-sm">
        <span className={classNames(
            dark ? ' text-gray-200' : ' text-gray-900',
            'font-medium'
          )}
        >Notify me.</span>{' '}
        <span className={classNames(
            dark ? ' text-gray-400' : ' text-gray-500',
            'font-medium'
          )}
        >We&apos;ll reach out to get your input.</span>
      </Switch.Label>
    </Switch.Group>
  )
}

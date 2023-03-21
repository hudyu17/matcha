import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MentorSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-green-700' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-gray-900">Notify me.</span>{' '}
        <span className="text-gray-500">We&apos;ll reach out to get your thoughts.</span>
      </Switch.Label>
    </Switch.Group>
  )
}

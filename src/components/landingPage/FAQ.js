import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        id: 1,
        question: "What is CareerMatcha and how do I use it?",
        answer:
            `A curated database of career paths that you can draw inspiration from. You can search and filter for specific careers that you want to see; e.g. "paths from consulting to startups".`,
    },
    {
        id: 2,
        question: "Who's featured in here?",
        answer:
            "Individuals with varying levels of experience, ranging from a few years after graduation to industry leaders with decades of experience. All anonymised.",
    },
    {
        id: 3,
        question: "What industries are included?",
        answer:
            "Currently focused on consulting, tech, and startups. Expanding to life sciences soon.",
    },
    {
        id: 4,
        question: "When would I use CareerMatcha?",
        answer:
            "Anytime you think about your career 😎 Whether you're planning a pivot, just thinking about other industries, or still finishing up school, you'll find direction and get inspired from the paths on CareerMatcha.",
    },
    // More questions...
  ]
  
export default function FAQ() {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pt-16 pb-24 sm:pb-32 ">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                    <>
                        <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                            {open ? (
                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                            </span>
                        </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
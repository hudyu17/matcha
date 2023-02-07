/* This example requires Tailwind CSS v3.0+ */
const faqs = [
    {
      id: 1,
      question: "What is this product actually?",
      answer:
        "A collection of anonymised career paths that you can draw inspiration from.",
    },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Send us an email
            </a>{' '}
            and we’ll get back to you as soon as possible.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
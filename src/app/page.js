import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bottom-12">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">Tutoring Subscription</h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">Tutoring services starting at $25 USD/hr for AP Physics</p>
                  <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-sky-500">What’s included</h4>
                      <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-500" viewBox="0 0 20 20" fill="currentColor"
                               aria-hidden="true">
                              <path fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"/>
                          </svg>
                          Additional Worksheet Exercises Tailored to AP Physics
                      </li>
                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-500" viewBox="0 0 20 20" fill="currentColor"
                               aria-hidden="true">
                              <path fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"/>
                          </svg>
                         Custom Made Classes
                      </li>
                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-500" viewBox="0 0 20 20" fill="currentColor"
                               aria-hidden="true">
                              <path fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"/>
                          </svg>
                         Exam Prep Resources for AP Physics
                      </li>
                  </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div
                      className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                          <p className="text-base font-semibold text-gray-600">Subscribe</p>
                          <p className="mt-6 flex items-baseline justify-center gap-x-2">
                              <span className="text-5xl font-bold tracking-tight text-gray-900">25$</span>
                              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                          </p>
                          <a href="#"
                             className="mt-10 block w-full rounded-md bg-sky-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Get
                              access</a>
                          <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy
                              company reimbursement</p>
                      </div>
                  </div>
              </div>
          </div>
          <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p className="text-lg font-medium">
                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                          "Tailwind CSS is the only framework that I've seen scale
                          on large teams. It’s easy to customize, adapts to any design,
                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                          and the build size is tiny."
                      </p>
                  </blockquote>
                  <figcaption className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                          Thomas Pennant
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                          Creator of xapp
                      </div>
                  </figcaption>
              </div>
          </figure>
          <footer className="absolute bottom-0 left-0 flex justify-center items-center h-full">

          </footer>
      </main>
);
}

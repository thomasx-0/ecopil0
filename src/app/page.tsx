"use client"

// import {useState} from "react";
import Image from "next/image"
import React from "react"
import {emailSenderUtil} from "@/app/utils/feedbackSender";

export default function Home() {

    // const [email, setEmail] = useState

    function handleFeedback() {
        console.log("email sent...")
        return emailSenderUtil
    }

    return (
      <main className="flex min-h-screen flex-col justify-around p-20 gap-7">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  git clone https://github.com/thomasx-0/xapp.git
              </p>
              <div
                  className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                  <a
                      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                      href="https://github.com/thomasx-0"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      By thomasx-0
                  </a>
              </div>
          </div>
          <div className="flex flex-row justify-around flex-wrap gap-x-7">
              <div className="card bg-base-100 w-96 shadow-xl dark:bg-slate-800">
                  <figure>
                      <Image
                          src="/tutoring-image.webp"
                          width={384}
                          height={322}
                          alt="Image of two girls holding books"/>
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">
                          Tutorials
                          <div className="badge badge-primary">NEW</div>
                      </h2>
                      <p>Online tutoring sessions starting at $25.00 USD per hour</p>
                      <div className="card-actions justify-end">
                          <div className="badge badge-outline">AP Physics</div>
                          <div className="badge badge-outline">A-Level Physics</div>
                      </div>
                  </div>
              </div>
              <label className="form-control">
                  <div className="label">
                      <span className="label-text">Feedback</span>
                      <span className="label-text-alt">Alt label</span>
                  </div>
                  <textarea className="textarea textarea-bordered h-24 w-96 dark:bg-slate-800"
                            placeholder="Feedback"></textarea>
                  <div className="label">
                      <span className="label-text-alt"></span>
                      <button type="button" onClick={handleFeedback} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Submit</button>
                  </div>
              </label>
          </div>
          <div
              className="relative flex place-items-end before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

          </div>
          <footer
              className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 2024
          </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline">Contact</a>
                  </li>
              </ul>
          </footer>
      </main>
  );
}

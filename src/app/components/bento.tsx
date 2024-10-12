import React from "react";
import Image from 'next/image';

export function Grid() {
  return (
      <div className="bg-white py-24 sm:py-32 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-blue-600">Clean Living</h2>
          <p className="mx-auto mt-2 max-w-lg text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl dark:text-white">
          How to Live a More Sustainable Life
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] dark:bg-black"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-white">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] dark:bg-black"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                      className="w-full max-lg:max-w-xs"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                      alt="Bento Box Performance"
                      width={800}  // You need to manually specify width and height
                      height={600} // Adjust these values according to your image dimensions
                  />
                  );
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-black"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-white">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
          </div>
        </div>
      </div>
  );
}
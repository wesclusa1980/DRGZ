import React, { useState } from "react";
import BaseTemplate from '../components/BaseTemplate'
import useSWR from "swr";

import { useRouter } from "next/router";

export default function Account() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  return (
    <BaseTemplate>
      <div class="flex items-start justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Account</h3>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user && user.name}
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user && user.email}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">DRGZ Balance</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  122
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Fiat Equivalent
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  $120,000
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">About</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* <section class="body-font">
              <div class="container px-8 pb-24 mx-auto pt-36 lg:px-4">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 mx-auto mb-6 lg:w-1/3 lg:mb-0">
                    <div class="h-full text-center">
                      <p class="text-4xl ...">DRGZ Balance</p>
                      <p class="text-2xl ... text-black">0</p>
                      <br />
                      <p class="text-4xl ...">DRGZ Balance</p>
                      <p class="text-2xl ... text-black">0</p>
                      <br />
                      <br />
                      <p class="text-base font-medium leading-relaxed text-gray-700">
                        Skate ipsum dolor sit amet, slam birdie wheels ollie
                        darkslide egg plant. Baseplate 540 helipop flypaper
                        feeble griptape. Nollie deck street bluntslide half-cab
                        yeah. Casper slide ollie north 540 Bill Danforth slide
                        cess slide nose blunt. Pressure flip Streetstyle in
                        Tempe mute-air judo air backside fastplant yeah.
                      </p>
                      <h2 class="mt-12 text-sm font-medium tracking-wider text-gray-900 title-font">
                        {user && user.name}
                      </h2>
                      <p class="text-gray-500">{user && user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
      </div>
    </BaseTemplate>
  );
}

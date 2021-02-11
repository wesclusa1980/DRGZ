import BaseTemplate from "../components/BaseTemplate";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { PrivateKey } from "@hashgraph/sdk";
import axios from "axios";
import { useRouter } from "next/router";
import { data } from "autoprefixer";

export default function Account() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const [balance, setBalance] = useState();

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  console.log(user);

  const getBalance = async () => {
    try {
      const res = await axios.get(`/api/getbalance/${user.hederaAccountID}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log("REsponse", res);

      setBalance(res.data.balance);

      // if (res.ok) {
      //   console.log("REsponse", res);
      // } else {
      //   throw new Error(await res.text());
      // }
    } catch (error) {
      console.error(error);
      // setErrorMessage(error.message);
    }
  };

  const topUp = async (count) => {
    const res = await axios.post(
      `/api/topup`,
      {
        count: count,
        account_id: user.hederaAccountID,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response", res);
    getBalance();
  };

  useEffect(() => {
    user && getBalance();
  }, [user]);

  // console.log(balance);

  return (
    <BaseTemplate>
      <div className="flex-1 p-4 text-gray-500 w-full">
        <div className="mt-12 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden w-full sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Account
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user && user.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user && user.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    DRGZ Balance
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex justify-between">
                      <div>{balance}</div>
                      <button
                        className="bg-blue-bright hover:bg-blue-600 p-4 rounded-lg"
                        onClick={() => topUp(10)}
                      >
                        10 for $10
                      </button>
                      <button
                        className="bg-blue-bright hover:bg-blue-600 p-4 rounded-lg"
                        onClick={() => topUp(5)}
                      >
                        5 for $5
                      </button>
                    </div>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Fiat Equivalent
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${balance}.00
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* <section className="body-font">
              <div className="container px-8 pb-24 mx-auto pt-36 lg:px-4">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 mx-auto mb-6 lg:w-1/3 lg:mb-0">
                    <div className="h-full text-center">
                      <p className="text-4xl ...">DRGZ Balance</p>
                      <p className="text-2xl ... text-black">0</p>
                      <br />
                      <p className="text-4xl ...">DRGZ Balance</p>
                      <p className="text-2xl ... text-black">0</p>
                      <br />
                      <br />
                      <p className="text-base font-medium leading-relaxed text-gray-700">
                        Skate ipsum dolor sit amet, slam birdie wheels ollie
                        darkslide egg plant. Baseplate 540 helipop flypaper
                        feeble griptape. Nollie deck street bluntslide half-cab
                        yeah. Casper slide ollie north 540 Bill Danforth slide
                        cess slide nose blunt. Pressure flip Streetstyle in
                        Tempe mute-air judo air backside fastplant yeah.
                      </p>
                      <h2 className="mt-12 text-sm font-medium tracking-wider text-gray-900 title-font">
                        {user && user.name}
                      </h2>
                      <p className="text-gray-500">{user && user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        </div>
      </div>
    </BaseTemplate>
  );
}

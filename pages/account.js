import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dropzone from "../components/Dropzone";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {PrivateKey} from "@hashgraph/sdk"
import axios from 'axios';
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
          }
        });

        // console.log("REsponse", res);

        setBalance(res.data.balance)

        // if (res.ok) {
        //   console.log("REsponse", res);
        // } else {
        //   throw new Error(await res.text());
        // }
      } catch (error) {
        console.error(error);
        // setErrorMessage(error.message);
      }
  }

  const topUp = async (count) => {
    const res = await axios.post(`/api/topup`, 
    {
      count : count,
      account_id: user.hederaAccountID
    }
    ,{
      headers: {
        "Content-Type": "application/json",
      }
    });

    console.log("Response", res);
    getBalance();
  }


  useEffect(() => {
    user && getBalance();
  }, [user])

  // console.log(balance);

  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <div className="w-2/12 bg-white rounded p-3 shadow-lg">
        <Sidebar />
      </div>
      

      <div className="w-10/12">
        <div className="p-4 text-gray-500">
          <div className="mt-12 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Account
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user && user.name}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user && user.email}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      DRGZ Balance
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {balance}
                      <button className="topUp_Button" onClick={() => topUp(10)} style={{background: "blue", marginLeft: '50px', padding: '20px'}}>10 for $10</button>
            <button className="topUp_Button" onClick={() => topUp(5)} style={{background: "blue", marginLeft: '50px', padding: '20px'}}>5 for $5</button>
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
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              resume_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              coverletter_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                      </ul>
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
    </BaseTemplate>
  );
}

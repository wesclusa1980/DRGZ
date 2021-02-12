import BaseTemplate from "../components/BaseTemplate";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { PrivateKey } from "@hashgraph/sdk";
import axios from "axios";
import { useRouter } from "next/router";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

export default function Account() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const [balance, setBalance] = useState();
  const [drgzPurchaseAmount, setDrgzPurchaseAmount] = useState();

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  console.log(user);

  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

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
                    {/* <button
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
                    </button> */}
                    {balance}
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
                  <dt className="text-sm font-medium text-gray-500">
                    Top Up Balance
                  </dt>
                  <dd className="mt-1 pt-5 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex">
                      <div className="flex flex-col">
                        <div className="align-middle">Enter Amount:</div>
                        <input
                          placeHolder="DRGZ amount"
                          className="border rounded-lg border-gray-400 p-2"
                          onChange={(e) =>
                            setDrgzPurchaseAmount(e.currentTarget.value)
                          }
                          value={drgzPurchaseAmount}
                        />
                      </div>
                      <div className="flex flex-col px-2">
                        <div>Payment details:</div>
                        <div className={`flex bg-white border p-2 ${meta.isTouched && meta.error ? 'border-red-700' :'border-gray-400'} rounded-lg align-middle`}>
                          <div className="px-2">
                            <svg {...getCardImageProps({ images })} />
                          </div>
                          <input
                            {...getCardNumberProps()}
                            className="align-middle border-0 h-5/6 w-40 px-1 focus:outline-none"
                          />
                          <input
                            {...getExpiryDateProps()}
                            className="align-middle border-0 h-5/6 w-16 px-1 focus:outline-none"
                          />
                          <input
                            {...getCVCProps()}
                            className="align-middle border-0 h-5/6 w-16 px-1 focus:outline-none"
                          />
                        </div>
                        <div className="text-red-700 py-1">
                          {meta.isTouched && meta.error && (
                            <span>Error: {meta.error}</span>
                          )}
                        </div>
                        <div className="flex p-2 mt-2 justify-end w-full">
                          <button
                            className="rounded-md font-medium p-3 bg-gray-200 hover:bg-gray-300 focus:shadow-outline"
                            onClick={() => topUp(drgzPurchaseAmount)}
                          >
                            Purchase DRGZ
                          </button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}

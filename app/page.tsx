"use client";
import Image from "next/image";
import money from "./images/money-icon.png";
import MoneyShare from "@/components/MoneyShare";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-2xl rounded-2xl p-8 max-w-xl w-full ">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Money Share Calculator
        </h1>
        <h3 className="text-xl font-bold text-center text-blue-700 mt-4">
          จำนวนเงินที่ต้องการหารกัน
        </h3>
        <Image
          src={money}
          alt="money"
          width={100}
          className="mx-auto mt-4 mb-8"
        />
        <MoneyShare />
      </div>
      <h3 className="mt-2 font-bold text-center text-xl">
        Developed by <span className="text-blue-500">chanachai DTI</span>
      </h3>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function MoneyShare() {
  const [money, setMoney] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState(0.0);

  const handleResetUIValue = () => {
    setMoney("");
    setPerson("");
    setMoneyShare(0.0);
  };

  const handleCalMoney = () => {
    if (money.length == 0 || money == "0") {
      alert("กรุณากรอกจำนวนเงิน");
      return;
    } else if (person.length == 0 || person == "0") {
      alert("กรุณากรอกจำนวนคน");
      return;
    } else {
      setMoneyShare(parseFloat(money) / parseInt(person));
    }
  };
  return (
    <div>
      <h3 className="font-bold text-gray-500 text-xl mb-2">จำนวนเงิน:</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนเงิน"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <h3 className="font-bold text-gray-500 text-xl mb-2 mt-2">จำนวนคน:</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนคน"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        onClick={handleCalMoney}
        className="w-full mt-4 bg-blue-600 text-white p-4 rounded-2xl"
      >
        คำนวณ
      </button>
      <button
        onClick={handleResetUIValue}
        className="w-full mt-4 bg-red-600 text-white p-4 rounded-2xl"
      >
        ล้างข้อมูล
      </button>
      <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-500">
          หารกันคนละ{" "}
          <span className="text-red-800 text-2xl">{moneyShare.toFixed(2)}</span>{" "}
          บาท
        </h3>
      </div>
    </div>
  );
}

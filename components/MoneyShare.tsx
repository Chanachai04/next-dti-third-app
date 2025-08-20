export default function MoneyShare() {
  return (
    <div>
      <h3 className="font-bold text-gray-500 text-xl mb-2">จำนวนเงิน:</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนเงิน"
        className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <h3 className="font-bold text-gray-500 text-xl mb-2 mt-2">จำนวนคน:</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนคน"
        className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button className="w-full mt-4 bg-blue-600 text-white p-4 rounded-2xl">
        คำนวณ
      </button>
      <button className="w-full mt-4 bg-red-600 text-white p-4 rounded-2xl">
        ล้างข้อมูล
      </button>
      <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-500">
          หารกันคนละ <span className="text-red-800 text-2xl">0.00</span> บาท
        </h3>
      </div>
    </div>
  );
}

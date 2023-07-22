import React from 'react'

function MFSS({data}) {
  const datas= data.trade_statistics
  return (
    <div className="bg-white px-4 w-full flex flex-col gap-5 lg:px-4 items-center justify-center">
      <h2 className="text-xl text-indigo-500 font-serif font-bold">{datas.heading}</h2>
      <h2 className="text-indigo-500">{datas.timestamp}</h2>
      <div className="w-[80%] md:w-full">
        <div className="table-responsive">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-indigo-700 text-white uppercase text-sm leading-normal">
                <th className="text-left">Order Type</th>
                <th className="text-left">Number of Orders</th>
                <th className="text-left">Value (in Lakhs)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Subscription</td>
                <td className="py-3 px-6 text-left">{datas.orders.subscription.no_of_orders}</td>
                <td className="py-3 px-6 text-left">{datas.orders.subscription.value_lakhs}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Redemption</td>
                <td className="py-3 px-6 text-left">{datas.orders.redemption.no_of_orders}</td>
                <td className="py-3 px-6 text-left">{datas.orders.redemption.value_lakhs}</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Total</td>
                <td className="py-3 px-6 text-left">{datas.orders.total.no_of_orders}</td>
                <td className="py-3 px-6 text-left">{datas.orders.total.value_lakhs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-indigo-400">{datas.note}</p>
      <p className="text-indigo-400">{datas.final_details_note}</p>
    </div>
  )
}

export default MFSS
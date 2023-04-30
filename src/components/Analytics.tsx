import { useEffect, useState } from "react"

import useGetControlloData from "~hooks/useGetControlloData"

const Analytics = ({ random }) => {
  const controlloData = useGetControlloData(random)
  const [monthlyPay, setMonthlyPay] = useState(0)

  useEffect(() => {
    let aux = 0

    for (let i = 0; i < controlloData.length; i++) {
      if (controlloData[i].frecuency === "monthly") {
        aux += parseFloat(controlloData[i].amount)
      } else {
        aux += parseFloat(controlloData[i].amount) / 12
      }
    }

    setMonthlyPay(aux)
  }, [controlloData])

  return (
    <>
      <input type="checkbox" id="analytics" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="font-bold text-lg mb-5">Analytics</h3>
          <label
            htmlFor="analytics"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <ul className="space-y-3 list-inside text-base">
            <li className="flex items-center">{`💵 You pay $${monthlyPay} monthly`}</li>
            <li className="flex items-center">{`💸 You pay $${
              monthlyPay * 12
            } yearly`}</li>
            {/* <li className="flex items-center">
              ⬛ You have 0 expired subscriptions
            </li>
            <li className="flex items-center">
              🟥 You have to pay 0 subscriptions in less than 7 dayss
            </li>
            <li className="flex items-center">
              🟨 You have to pay 0 subscriptions in less than 30 days
            </li>
            <li className="flex items-center">
              🟩 You have to pay 0 subscriptions in more than 30 days
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Analytics

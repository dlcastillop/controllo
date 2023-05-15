import { useEffect, useState } from "react"

import useGetControlloData from "~hooks/useGetControlloData"

const Analytics = ({ random }) => {
  const daysLeft = (subscription) => {
    const newDate = new Date()
    const today: string =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate()
    return Math.ceil(
      (new Date(subscription.date).getTime() - new Date(today).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  }

  const controlloData = useGetControlloData(random)
  const [controlloDataTemp, setControlloDataTemp] = useState([])
  const [monthlyPay, setMonthlyPay] = useState(0)
  const [totalDaysLeft, setTotalDaysLeft] = useState({
    overdue: 0,
    less7: 0,
    less30: 0,
    more30: 0
  })

  useEffect(() => {
    let aux = 0
    let overdue = 0
    let less7 = 0
    let less30 = 0
    let more30 = 0

    if (controlloData !== undefined) setControlloDataTemp([...controlloData])

    for (let i = 0; i < controlloDataTemp.length; i++) {
      if (controlloDataTemp[i].frecuency === "monthly") {
        aux += parseFloat(controlloDataTemp[i].amount)
      } else {
        aux += parseFloat(controlloDataTemp[i].amount) / 12
      }

      if (daysLeft(controlloDataTemp[i]) < 0) {
        overdue++
      } else if (daysLeft(controlloDataTemp[i]) <= 7) {
        less7++
      } else if (daysLeft(controlloDataTemp[i]) <= 30) {
        less30++
      } else {
        more30++
      }
    }

    setMonthlyPay(aux)
    setTotalDaysLeft({
      overdue,
      less7,
      less30,
      more30
    })
  }, [controlloData])

  return (
    <>
      <input type="checkbox" id="analytics" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="font-medium text-lg mb-5">Analytics</h3>
          <label
            htmlFor="analytics"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <ul className="space-y-3 list-inside text-sm">
            <li className="text-center border-black border-2 rounded-lg px-4 py-2">{`You pay $${monthlyPay.toFixed(
              2
            )} monthly`}</li>
            <li className="text-center border-black border-2 rounded-lg px-4 py-2">{`You pay $${(
              monthlyPay * 12
            ).toFixed(2)} yearly`}</li>
            <div className="space-y-3 p-3 bg-base-100 rounded-lg">
              <li className="text-center border-neutral border-2 rounded-lg px-4 py-2 text-neutral">
                {`${totalDaysLeft.overdue} expired subscriptions`}
              </li>
              <li className="text-center border-error border-2 rounded-lg px-4 py-2 text-error">
                {`${totalDaysLeft.less7} subscriptions with less than 7 days`}
              </li>
              <li className="text-center border-warning border-2 rounded-lg px-4 py-2 text-warning">
                {`${totalDaysLeft.less30} subscriptions with less than 30 days`}
              </li>
              <li className="text-center border-success border-2 rounded-lg px-4 py-2 text-success">
                {`${totalDaysLeft.more30} subscriptions with more than 30 days`}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Analytics

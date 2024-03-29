import { useEffect, useState } from "react"

import useGetControlloSettings from "~hooks/useGetControlloSettings"

const Subscription = ({ del, edit, paid, data, id, random }) => {
  const [color, setColor] = useState("")
  const controlloSettings = useGetControlloSettings()
  const [daysText, setDaysText] = useState("")

  useEffect(() => {
    const newDate = new Date()
    const today: string =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate()
    const diffInDays = Math.ceil(
      (new Date(data.date).getTime() - new Date(today).getTime()) /
        (1000 * 60 * 60 * 24)
    )

    if (diffInDays < 0) {
      setDaysText(`Deadline was ${diffInDays * -1} days ago`)
    } else if (diffInDays === 0) {
      setDaysText(`You have to pay today`)
    } else if (diffInDays === 1) {
      setDaysText(`1 day left`)
    } else {
      setDaysText(`${diffInDays} days left`)
    }

    if (diffInDays <= 7) {
      setColor("bg-error")
    } else if (diffInDays <= 30) {
      setColor("bg-warning")
    } else {
      setColor("bg-success")
    }
  }, [random])

  const formatDate = (date) => {
    let formatedDate = ""
    let year = date[0] + date[1] + date[2] + date[3]
    let month = date[5] + date[6]
    let day = date[8] + date[9]

    if (month === "01") {
      formatedDate += "Jan"
    } else if (month === "02") {
      formatedDate += "Feb"
    } else if (month === "03") {
      formatedDate += "Mar"
    } else if (month === "04") {
      formatedDate += "Apr"
    } else if (month === "05") {
      formatedDate += "May"
    } else if (month === "06") {
      formatedDate += "Jun"
    } else if (month === "07") {
      formatedDate += "Jul"
    } else if (month === "08") {
      formatedDate += "Aug"
    } else if (month === "09") {
      formatedDate += "Sep"
    } else if (month === "10") {
      formatedDate += "Oct"
    } else if (month === "11") {
      formatedDate += "Nov"
    } else if (month === "12") {
      formatedDate += "Dec"
    }

    formatedDate = formatedDate + " " + day + ", " + year

    return formatedDate
  }

  return (
    <li
      className={
        "w-full p-3 h-16 rounded hover:scale-105 ease-in-out duration-500 text-black " +
        color
      }>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium truncate">{data.service}</p>
          <p className="text-sm truncate">{`$${data.amount}/${
            data.frecuency === "monthly" ? "month" : "year"
          }`}</p>
        </div>
        <div className="flex justify-center gap-3 items-center">
          <p className="text-sm">
            {controlloSettings.showPaymentDate
              ? formatDate(data.date)
              : daysText}
          </p>
          <button onClick={() => paid(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-credit-card-fill"
              viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
            </svg>
          </button>
          <div className="dropdown dropdown-hover dropdown-left">
            <label tabIndex={id} className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </label>
            <ul
              tabIndex={id}
              className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded text-sm">
              {data.serviceLink !== "" ? (
                <li>
                  <a href={data.serviceLink} target="_blank">
                    Pay
                  </a>
                </li>
              ) : undefined}
              <li>
                <label htmlFor="modal" onClick={() => edit(id)}>
                  Edit
                </label>
              </li>
              <li>
                <a href="#" onClick={() => del(id)}>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Subscription

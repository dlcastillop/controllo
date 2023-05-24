import { useEffect, useState } from "react"

import About from "~components/About"
import Analytics from "~components/Analytics"
import Header from "~components/Header"
import Modal from "~components/Modal"
import Settings from "~components/Settings"
import Subscription from "~components/Subscription"
import useGetControlloData from "~hooks/useGetControlloData"
import useSetControlloData from "~hooks/useSetControlloData"

import "./styles.css"

const IndexPopup = () => {
  const [modal, setModal] = useState({
    title: "",
    action: "",
    id: -1,
    random: Math.random()
  })
  const [update, setUpdate] = useState(false)
  const controlloData = useGetControlloData(update)
  const [controlloDataTemp, setControlloDataTemp] = useState([])

  useEffect(() => {
    if (controlloData !== undefined) setControlloDataTemp([...controlloData])
  }, [controlloData])

  const del = (id: Number) => {
    let aux = []

    for (let i = 0; i < controlloData.length; i++) {
      if (i !== id) {
        aux.push(controlloData[i])
      }
    }

    useSetControlloData(aux)
    setUpdate(!update)
  }

  const search = (text: string) => {
    if (controlloData !== undefined) {
      return controlloData.filter((el) => {
        return el.service.toLowerCase().includes(text.toLowerCase())
      })
    }
  }

  const paid = (id: Number) => {
    let aux = []

    for (let i = 0; i < controlloData.length; i++) {
      if (i === id) {
        let year =
          controlloData[i].date[0] +
          controlloData[i].date[1] +
          controlloData[i].date[2] +
          controlloData[i].date[3]
        let month = controlloData[i].date[5] + controlloData[i].date[6]
        let day = controlloData[i].date[8] + controlloData[i].date[9]
        let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0

        if (controlloData[i].frecuency === "monthly") {
          if (month === "01") {
            if (parseInt(controlloData[i].payDay) > 28 && isLeapYear) {
              day = "29"
            } else if (parseInt(controlloData[i].payDay) > 28 && !isLeapYear) {
              day = "28"
            } else {
              day = controlloData[i].payDay
            }
            month = "02"
          } else if (month === "02") {
            day = controlloData[i].payDay
            month = "03"
          } else if (month === "03") {
            if (parseInt(controlloData[i].payDay) === 31) {
              day = "30"
            } else {
              day = controlloData[i].payDay
            }
            month = "04"
          } else if (month === "04") {
            day = controlloData[i].payDay
            month = "05"
          } else if (month === "05") {
            if (parseInt(controlloData[i].payDay) === 31) {
              day = "30"
            } else {
              day = controlloData[i].payDay
            }
            month = "06"
          } else if (month === "06") {
            day = controlloData[i].payDay
            month = "07"
          } else if (month === "07") {
            day = controlloData[i].payDay
            month = "08"
          } else if (month === "08") {
            if (parseInt(controlloData[i].payDay) === 31) {
              day = "30"
            } else {
              day = controlloData[i].payDay
            }
            month = "09"
          } else if (month === "09") {
            day = controlloData[i].payDay
            month = "10"
          } else if (month === "10") {
            if (parseInt(controlloData[i].payDay) === 31) {
              day = "30"
            } else {
              day = controlloData[i].payDay
            }
            month = "11"
          } else if (month === "11") {
            day = controlloData[i].payDay
            month = "12"
          } else if (month === "12") {
            day = controlloData[i].payDay
            month = "01"
            year = (parseInt(year) + 1).toString()
          }
        } else {
          year = (parseInt(year) + 1).toString()
        }
        aux.push({ ...controlloData[i], date: year + "-" + month + "-" + day })
      } else {
        aux.push(controlloData[i])
      }
    }

    useSetControlloData(aux)
    setUpdate(!update)
  }

  return (
    <div className="w-96 h-96 max-h-96 overflow-y-auto bg-base-100 text-primary font-sans font-normal">
      <div className="w-5/6 flex flex-col gap-5 items-center m-auto">
        <Header />
        <label
          htmlFor="modal"
          className="btn btn-sm btn-primary rounded"
          onClick={() =>
            setModal({
              title: "New service",
              action: "Add",
              id: -1,
              random: Math.random()
            })
          }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-content">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-primary text-base-content placeholder-base-content input-sm"
          onChange={(e) => setControlloDataTemp(search(e.target.value))}
        />
        <ul className="flex flex-col items-center gap-5 w-full">
          {typeof controlloDataTemp === "undefined"
            ? undefined
            : controlloDataTemp.map((el: Object, i: Number) => {
                return (
                  <Subscription
                    data={el}
                    id={i}
                    del={(id: Number) => del(id)}
                    paid={(id: Number) => paid(id)}
                    edit={(id: number) =>
                      setModal({
                        title: "Edit service",
                        action: "Save",
                        id,
                        random: Math.random()
                      })
                    }
                    key={i.toString()}
                    random={Math.random()}
                  />
                )
              })}
        </ul>
      </div>
      <Modal
        title={modal.title}
        action={modal.action}
        id={modal.id}
        updateSuscription={() => setUpdate(!update)}
        random={modal.random}
      />
      <Settings />
      <About />
      <Analytics random={Math.random()} />
    </div>
  )
}

export default IndexPopup

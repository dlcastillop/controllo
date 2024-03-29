import { useEffect, useState } from "react"

import useGetControlloData from "~hooks/useGetControlloData"
import useSetControlloData from "~hooks/useSetControlloData"

const Modal = ({ title, action, id, updateSuscription, random }) => {
  const $serviceInput = document.querySelector(
    "#service-input"
  ) as HTMLInputElement
  const $amountInput = document.querySelector(
    "#amount-input"
  ) as HTMLInputElement
  const $frecuencyInput = document.querySelector(
    "#frecuency-input"
  ) as HTMLInputElement
  const $dateInput = document.querySelector("#date-input") as HTMLInputElement
  const $serviceLinkInput = document.querySelector(
    "#link-input"
  ) as HTMLInputElement
  const $modal = document.getElementById("modal") as HTMLInputElement

  const controlloData = useGetControlloData(random)
  const [values, setValues] = useState({
    service: "",
    amount: "",
    frecuency: "monthly",
    date: "",
    serviceLink: "",
    payDay: ""
  })

  useEffect(() => {
    if (id >= 0) {
      setValues({
        service: controlloData[id].service,
        amount: controlloData[id].amount,
        frecuency: controlloData[id].frecuency,
        date: controlloData[id].date,
        serviceLink: controlloData[id].serviceLink,
        payDay: controlloData[id].payDay
      })
    }
  }, [controlloData])

  const todayStr = () => {
    const newDate = new Date()
    let today = ""
    today = newDate.getFullYear() + "-"

    if (newDate.getMonth() + 1 >= 10) {
      today += newDate.getMonth() + 1
    } else {
      today += "0"
      today += newDate.getMonth() + 1
    }

    today += "-"

    if (newDate.getDate() >= 10) {
      today += newDate.getDate()
    } else {
      today += "0"
      today += newDate.getDate()
    }

    return today
  }

  const checkInput = (value: String | Number, label: HTMLInputElement) => {
    if (value === "") {
      label.classList.remove("hidden")
      label.classList.add("block")
      return false
    } else {
      label.classList.remove("block")
      label.classList.add("hidden")
      return true
    }
  }

  const checkLink = () => {
    const urlRegex = /^https?:\/\/([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/
    const $serviceLinkLabel = document.querySelector(
      "#link-label"
    ) as HTMLInputElement
    const isValidUrl = urlRegex.test($serviceLinkInput.value)

    if ($serviceLinkInput.value !== "" && !isValidUrl) {
      $serviceLinkLabel.classList.remove("hidden")
      $serviceLinkLabel.classList.add("block")
      return false
    } else {
      $serviceLinkLabel.classList.remove("block")
      $serviceLinkLabel.classList.add("hidden")
      return true
    }
  }

  const closeModal = () => {
    setValues({
      service: "",
      amount: "",
      frecuency: "monthly",
      date: "",
      serviceLink: "",
      payDay: ""
    })
    $modal.checked = false
    updateSuscription()
  }

  async function handleClick() {
    const service = $serviceInput.value
    const amount = $amountInput.value
    const frecuency = $frecuencyInput.value
    const date = $dateInput.value
    const serviceLink = $serviceLinkInput.value

    const $serviceLabel = document.querySelector(
      "#service-label"
    ) as HTMLInputElement
    const $amountLabel = document.querySelector(
      "#amount-label"
    ) as HTMLInputElement
    const $dateLabel = document.querySelector("#date-label") as HTMLInputElement

    const isService = checkInput(service, $serviceLabel)
    const isAmount = checkInput(amount, $amountLabel)
    const isDate = checkInput(date, $dateLabel)
    const isValidURL = checkLink()

    if (isService && isAmount && isDate && isValidURL && action === "Add") {
      if (controlloData === undefined) {
        useSetControlloData([
          {
            service,
            amount,
            frecuency,
            date,
            serviceLink,
            payDay: date[8] + date[9]
          }
        ])
      } else {
        useSetControlloData([
          ...controlloData,
          {
            service,
            amount,
            frecuency,
            date,
            serviceLink,
            payDay: date[8] + date[9]
          }
        ])
      }

      closeModal()
    } else if (
      isService &&
      isAmount &&
      isDate &&
      isValidURL &&
      action === "Save"
    ) {
      let aux = []

      for (let i = 0; i < controlloData.length; i++) {
        if (i !== id) {
          aux.push(controlloData[i])
        } else {
          aux.push(values)
        }
      }

      useSetControlloData(aux)

      closeModal()
    }
  }

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="font-medium text-lg mb-5">{title}</h3>
          <label
            htmlFor="modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <div className="form-control w-full max-w-xs gap-5">
            <div>
              <input
                type="text"
                name="service"
                placeholder="What is the name of the service?"
                className="input input-bordered input-primary input-md w-full max-w-xs bg-neutral-focus text-neutral-content placeholder:text-neutral-content"
                id="service-input"
                value={values.service}
                onChange={(e) =>
                  setValues({ ...values, service: e.target.value })
                }
              />
              <label className="label hidden p-0.5" id="service-label">
                <span className="label-text-alt text-error">
                  Introduce the name of the service
                </span>
              </label>
            </div>

            <div>
              <input
                type="number"
                placeholder="How much do you pay?"
                className="input input-bordered input-primary input-md w-full max-w-xs bg-neutral-focus text-neutral-content placeholder:text-neutral-content"
                min={0}
                id="amount-input"
                value={values.amount}
                onChange={(e) =>
                  setValues({ ...values, amount: e.target.value })
                }
              />
              <label className="label hidden p-0.5" id="amount-label">
                <span className="label-text-alt text-error">
                  Introduce how much do you pay
                </span>
              </label>
            </div>

            <div>
              <input
                type="text"
                name="link"
                placeholder="What is the link of the service?"
                className="input input-bordered input-primary input-md w-full max-w-xs bg-neutral-focus text-neutral-content placeholder:text-neutral-content"
                id="link-input"
                value={values.serviceLink}
                onChange={(e) =>
                  setValues({ ...values, serviceLink: e.target.value })
                }
              />
              <label className="label hidden p-0.5" id="link-label">
                <span className="label-text-alt text-error">
                  Introduce a valid URL
                </span>
              </label>
            </div>

            <div>
              <select
                className="select select-bordered select-primary select-md w-full max-w-xs bg-neutral-focus text-neutral-content"
                id="frecuency-input"
                value={values.frecuency}
                onChange={(e) =>
                  setValues({ ...values, frecuency: e.target.value })
                }>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="input input-bordered input-primary input-md w-full max-w-xs bg-neutral-focus text-neutral-content placeholder:text-neutral-content"
                min={todayStr()}
                id="date-input"
                value={values.date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
              <label className="label hidden p-0.5" id="date-label">
                <span className="label-text-alt text-error">
                  Introduce when is the next payment
                </span>
              </label>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label
              className="btn btn-primary rounded normal-case"
              onClick={handleClick}>
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

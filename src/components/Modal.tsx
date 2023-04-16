import { useEffect, useState } from "react"

import useGetControlloData from "~hooks/useGetControlloData"
import useSetControlloData from "~hooks/useSetControlloData"

const Modal = ({ title, action, id, updateSuscription }) => {
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
  const $modal = document.getElementById("modal") as HTMLInputElement

  const controlloData = useGetControlloData(id)
  const [values, setValues] = useState({
    service: "",
    amount: "",
    frecuency: "monthly",
    date: ""
  })

  useEffect(() => {
    if (id !== -1) {
      setValues({
        service: controlloData[id].service,
        amount: controlloData[id].amount,
        frecuency: controlloData[id].frecuency,
        date: controlloData[id].date
      })
    }
  }, [id])

  const todayStr = () => {
    const newDate = new Date()
    const today =
      newDate.getFullYear() +
      "-0" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate()

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

  const closeModal = () => {
    $serviceInput.value = ""
    $amountInput.value = ""
    $frecuencyInput.value = "monthly"
    $dateInput.value = ""
    $modal.checked = false
    updateSuscription()
  }

  async function handleClick() {
    const service = $serviceInput.value
    const amount = $amountInput.value
    const frecuency = $frecuencyInput.value
    const date = $dateInput.value

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

    if (isService && isAmount && isDate && action === "Add") {
      if (controlloData === undefined) {
        useSetControlloData([{ service, amount, frecuency, date }])
      } else {
        useSetControlloData([
          ...controlloData,
          { service, amount, frecuency, date }
        ])
      }

      closeModal()
    } else if (isService && isAmount && isDate && action === "Save") {
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
          <h3 className="font-bold text-lg mb-5">{title}</h3>
          <div className="form-control w-full max-w-xs gap-5">
            <div>
              <input
                type="text"
                name="service"
                placeholder="What is the service name?"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                id="service-input"
                value={values.service}
                onChange={(e) =>
                  setValues({ ...values, service: e.target.value })
                }
              />
              <label className="label hidden p-0.5" id="service-label">
                <span className="label-text-alt text-red-600">
                  Introduce the service name
                </span>
              </label>
            </div>

            <div>
              <input
                type="number"
                placeholder="How much you pay?"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                min={0}
                id="amount-input"
                value={values.amount}
                onChange={(e) =>
                  setValues({ ...values, amount: e.target.value })
                }
              />
              <label className="label hidden p-0.5" id="amount-label">
                <span className="label-text-alt text-red-600">
                  Introduce how much you pay
                </span>
              </label>
            </div>

            <div>
              <select
                className="select select-bordered select-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
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
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                min={todayStr()}
                id="date-input"
                value={values.date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
              <label className="label hidden p-0.5" id="date-label">
                <span className="label-text-alt text-red-600">
                  Introduce when is the next payment
                </span>
              </label>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label className="btn btn-primary rounded" onClick={handleClick}>
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

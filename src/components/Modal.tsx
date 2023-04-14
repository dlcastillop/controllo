const Modal = ({ title, action }) => {
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

  const handleClick = () => {
    const service = (
      document.querySelector("#service-input") as HTMLInputElement
    ).value
    const amount = (document.querySelector("#amount-input") as HTMLInputElement)
      .value
    const date = (document.querySelector("#date-input") as HTMLInputElement)
      .value

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

    if (isService && isAmount && isDate) {
      //Hacer algo
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
                placeholder="What is the service name?"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                id="service-input"
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
              />
              <label className="label hidden p-0.5" id="amount-label">
                <span className="label-text-alt text-red-600">
                  Introduce how much you pay
                </span>
              </label>
            </div>

            <div>
              <select className="select select-bordered select-primary w-full max-w-xs bg-neutral-focus text-neutral-content">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                min={0}
                id="date-input"
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

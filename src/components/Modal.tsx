const Modal = () => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">New service</h3>
          <div className="form-control w-full max-w-xs gap-5">
            <div>
              <input
                type="text"
                placeholder="Service name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
              </label>
            </div>

            <div>
              <input
                type="number"
                placeholder="Amount you pay"
                className="input input-bordered w-full max-w-xs"
                min={0}
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
              </label>
            </div>

            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                min={0}
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
              </label>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="modal" className="btn">
              Create
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

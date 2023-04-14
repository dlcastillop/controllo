const Modal = () => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="font-bold text-lg mb-5">New service</h3>
          <div className="form-control w-full max-w-xs gap-5">
            <div>
              <input
                type="text"
                placeholder="What is the service name?"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
              </label>
            </div>

            <div>
              <input
                type="number"
                placeholder="How much you pay?"
                className="input input-bordered input-primary w-full max-w-xs bg-neutral-focus text-neutral-content"
                min={0}
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
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
              />
              <label className="label hidden">
                <span className="label-text-alt">Error</span>
              </label>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label htmlFor="modal" className="btn btn-primary rounded">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

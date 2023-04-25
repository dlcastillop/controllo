const Analytics = () => {
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
            <li className="flex items-center">💵 At least 10 characters</li>
            <li className="flex items-center">💸 At least 100 characters</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Analytics

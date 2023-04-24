import useGetControlloSettings from "~hooks/useGetControlloSettings"
import useSetControlloSettings from "~hooks/useSetControlloSettings"

const Settings = () => {
  const controlloSettings = useGetControlloSettings()

  return (
    <>
      <input type="checkbox" id="setting" className="modal-toggle visible" />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="font-bold text-lg mb-5">Settings</h3>
          <label
            htmlFor="setting"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-base">Show payment date</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={controlloSettings.showPaymentDate}
                onChange={() =>
                  useSetControlloSettings({
                    showPaymentDate: !controlloSettings.showPaymentDate
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings

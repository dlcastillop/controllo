const Suscription = ({ setModal, data }) => {
  return (
    <li className="w-full p-3 h-16 rounded bg-success text-success-content hover:scale-105 ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium truncate">{data.service}</p>
          <p className="text-sm truncate">{`$${data.amount}/${data.frecuency}`}</p>
        </div>
        <div className="flex justify-center gap-3 items-center">
          <p className="text-sm font-medium">{data.date}</p>
          <div className="dropdown dropdown-hover dropdown-left">
            <label tabIndex={0}>
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
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded text-sm">
              <li>
                <label
                  htmlFor="modal"
                  onClick={() =>
                    setModal({
                      title: "Edit service",
                      action: "Save"
                    })
                  }>
                  Edit
                </label>
              </li>
              <li>
                <a href="#">Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Suscription

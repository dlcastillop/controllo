const Suscription = () => {
  return (
    <li className="w-full p-3 h-16 rounded bg-success text-success-content">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium truncate">Netflix</p>
          <p className="text-sm truncate">$20/month</p>
        </div>
        <div className="flex justify-center gap-3">
          <p className="text-sm font-medium">24/2/23</p>
          <button>
            <img src="" alt="Menu" />
          </button>
        </div>
      </div>
      <div className="z-10 hidden relative left-64 bottom-2 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-20 border hover:block">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default Suscription

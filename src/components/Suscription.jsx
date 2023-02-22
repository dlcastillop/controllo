import optionsImg from "../images/options.svg";

const Suscription = ({ id }) => {
  const toggleMenu = () => {
    const $menu = document.querySelector("#" + id);

    if ($menu.classList.contains("hidden")) {
      $menu.classList.remove("hidden");
      $menu.classList.add("block");
    } else {
      $menu.classList.remove("block");
      $menu.classList.add("hidden");
    }
  };

  return (
    <li className="py-3 h-16">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">Netflix</p>
          <p className="text-sm text-gray-500 truncate">$10/month</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          March 25
        </div>
        <div>
          <button onClick={toggleMenu}>
            <img src={optionsImg} alt="Menu" />
          </button>
        </div>
      </div>
      <div
        id={id}
        className="z-10 hidden relative left-64 bottom-1 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-20"
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Suscription;

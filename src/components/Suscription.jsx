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
    <li className="p-3 h-16 bg-green-500 w-11/12 rounded">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900 truncate">Netflix</p>
          <p className="text-sm text-gray-900 truncate">$10/month</p>
        </div>
        <div className="flex justify-center gap-3 text-base font-semibold text-gray-900">
          <p>March 25, 2023</p>
          <button onClick={toggleMenu}>
            <img src={optionsImg} alt="Menu" />
          </button>
        </div>
      </div>
      <div
        id={id}
        className="z-10 hidden relative left-64 bottom-1 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-20 border"
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

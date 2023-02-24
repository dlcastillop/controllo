import optionsImg from "../images/options.svg";

const Suscription = ({ service, ammount, frecuency, date, edit, del, id }) => {
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

  const formatDate = (date) => {
    let formatedDate = "";
    let year = date[0] + date[1] + date[2] + date[3];
    let month = date[5] + date[6];
    let day = date[8] + date[9];

    if (month === "01") {
      formatedDate += "Jan";
    } else if (month === "02") {
      formatedDate += "Feb";
    } else if (month === "03") {
      formatedDate += "Mar";
    } else if (month === "04") {
      formatedDate += "Apr";
    } else if (month === "05") {
      formatedDate += "May";
    } else if (month === "06") {
      formatedDate += "Jun";
    } else if (month === "07") {
      formatedDate += "Jul";
    } else if (month === "08") {
      formatedDate += "Aug";
    } else if (month === "09") {
      formatedDate += "Sep";
    } else if (month === "10") {
      formatedDate += "Oct";
    } else if (month === "11") {
      formatedDate += "Nov";
    } else if (month === "12") {
      formatedDate += "Dec";
    }

    formatedDate = formatedDate + " " + day + ", " + year;

    return formatedDate;
  };

  return (
    <li className="p-3 h-16 bg-green-500 w-11/12 rounded">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900 truncate">
            {service}
          </p>
          <p className="text-sm text-gray-900 truncate">
            ${ammount}/{frecuency}
          </p>
        </div>
        <div className="flex justify-center gap-3 text-base font-semibold text-gray-900">
          <p>{formatDate(date)}</p>
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
          <li
            onClick={() =>
              edit({ service, ammount, frecuency, date, edit, id })
            }
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </li>
          <li onClick={() => del(id)}>
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

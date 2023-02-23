import { useEffect } from "react";

const Modal = ({ showModal, hideModal }) => {
  useEffect(() => {
    const $modal = document.querySelector("#modal");

    if (showModal) {
      $modal.classList.remove("hidden");
      $modal.classList.add("block");
    } else {
      $modal.classList.remove("block");
      $modal.classList.add("hidden");
    }
  }, [showModal]);

  const checkInput = (value, span) => {
    if (value === "") {
      span.classList.remove("hidden");
      span.classList.add("block");
      return false;
    } else {
      span.classList.remove("block");
      span.classList.add("hidden");
      return true;
    }
  };

  const addSuscription = () => {
    const service = document.querySelector("#service").value;
    const ammount = document.querySelector("#ammount").value;
    const frecuency = document.querySelector("#frecuency").value;
    const date = document.querySelector("#date").value;
    const $serviceSpan = document.querySelector("#serviceSpan");
    const $ammountSpan = document.querySelector("#ammountSpan");
    const $dateSpan = document.querySelector("#dateSpan");
    const isServiceReady = checkInput(service, $serviceSpan);
    const isAmmountReady = checkInput(ammount, $ammountSpan);
    const isDateReady = checkInput(date, $dateSpan);

    if (isServiceReady && isAmmountReady && isDateReady) {
      let data = JSON.parse(localStorage.getItem("controlloData"));
      let newItem = {
        service,
        ammount,
        frecuency,
        date,
      };

      if (data === null) {
        data = [newItem];
      } else {
        data.push(newItem);
      }

      localStorage.setItem("controlloData", JSON.stringify(data));
      hideModal();
    }
  };

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4"
    >
      <div className="relative w-full h-full">
        <div className="relative rounded-lg shadow bg-gray-800 border">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
            onClick={() => hideModal()}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6">
            <h3 className="mb-4 text-xl font-medium text-white">
              New suscription service
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Service
                </label>
                <input
                  type="text"
                  id="service"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="Netflix"
                />
                <span
                  className="hidden my-1 text-sm font-medium text-red-600"
                  id="serviceSpan"
                >
                  You need to complete this field
                </span>
              </div>
              <div>
                <label
                  htmlFor="ammount"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  You pay...
                </label>
                <input
                  type="number"
                  id="ammount"
                  placeholder="10"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  min={1}
                />
                <span
                  className="hidden my-1 text-sm font-medium text-red-600"
                  id="ammountSpan"
                >
                  You need to complete this field
                </span>
              </div>

              <div>
                <label
                  htmlFor="frecuency"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Frecuency
                </label>
                <select
                  id="frecuency"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                >
                  <option value="month">Monthly</option>
                  <option value="year">Yearly</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Next payment
                </label>
                <input
                  type="date"
                  id="date"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                />
                <span
                  className="hidden my-1 text-sm font-medium text-red-600"
                  id="dateSpan"
                >
                  You need to complete this field
                </span>
              </div>
              <button
                type="button"
                className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
                onClick={addSuscription}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
